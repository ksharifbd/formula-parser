import React, { Component } from 'react';
import axios from 'axios';

import {
    STORAGE_KEY,
    API_URL,
    FORMULA_TRACKING_ID,
} from '../../config.json';
import CalculatorUI from '../CalculatorUI';
import {
    getVariables,
    fetchFormulas,
    constructInputStates,
    constructResultStates,
} from '../../utils';
import UserInput from '../UserInput';
import getVariablesBySequence from './getVariablesBySequence';
import calculateByFormula from './calculateByFormula';

class App extends Component {
    constructor(props) {
        super(props);

        this.state =  JSON.parse(localStorage.getItem(STORAGE_KEY));

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        evt.preventDefault();

        const {name, value} = evt.target;
        
        this.setState({[name]: value});
    }

    setInitialInpputAndResultStates() {
        const {formulas} = this.state;

        this.setState({
            ...constructInputStates(formulas),
            ...constructResultStates(formulas),
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();

        const {state} = this;

        const variablesBySequence = getVariablesBySequence(state);

        const output = state.formulas.map((formula, idx) => {
            const variablesAndValues = variablesBySequence[idx][`${idx + 1}`];

            const result = calculateByFormula(formula, variablesAndValues.values);

            this.setState({
                [`result_${FORMULA_TRACKING_ID}_${idx + 1}`]: result
            })


            return {
                formula,
                ...variablesAndValues,
                result,
            }
        });

        axios.post(`${API_URL}/result`, output)
            .catch(err => console.log(err));

        this.setInitialInpputAndResultStates();
    }

    componentDidMount() {
        fetchFormulas().then(formulas => this.setState({formulas}));
    }

    componentWillUnmount() {
        localStorage.removeItem(`${STORAGE_KEY}`);
    }

    render() {
        const {formulas} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <ol>
                    {formulas.length > 0 && formulas.map((formula, idx) => {
                        const sequence = idx + 1;
                        return (<CalculatorUI
                            key={formula}
                            sequence={sequence}
                            formula={formula}
                            result={this.state[`result_${FORMULA_TRACKING_ID}_${sequence}`]}>
                            {getVariables(formula).map(variable => (
                                <UserInput
                                    key={`${FORMULA_TRACKING_ID}_${sequence}_${variable}`}
                                    name={`${FORMULA_TRACKING_ID}_${sequence}_${variable}`}
                                    label={`${variable}:`}
                                    value={this.state[`${FORMULA_TRACKING_ID}_${sequence}_${variable}`]}
                                    onChange={this.handleChange} />
                            ))}
                            </CalculatorUI>
                    )})}
                </ol>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default App;
