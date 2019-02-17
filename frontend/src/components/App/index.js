import React, { Component } from 'react';

import {STORAGE_KEY} from '../../config.json';
import CalculatorUI from '../CalculatorUI';
import {getVariables, fetchFormulas} from '../../utils';
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

    handleSubmit(evt) {
        evt.preventDefault();

        const {state} = this;

        const variablesBySequence = getVariablesBySequence(state);

        const output = state.formulas.map((formula, idx) => {
            const variablesAndValues = variablesBySequence[idx][`${idx + 1}`];

            const values = variablesAndValues.values;

            const result = calculateByFormula(formula, values);

            this.setState({
                [`result_fid_${idx + 1}`]: result
            })


            return {
                formula,
                ...variablesAndValues,
                result,
            }
        });

    }

    componentDidMount() {
        fetchFormulas().then(formulas => this.setState({formulas}));
    }

    render() {
        const {formulas} = this.state;
        console.log('state', this.state);
        return (
            <form onSubmit={this.handleSubmit}>
                <ol>
                    {formulas.length > 0 && formulas.map((formula, idx) => {
                        const sequence = idx + 1;
                        return (<CalculatorUI
                            key={formula}
                            sequence={sequence}
                            formula={formula}
                            result={this.state[`result_fid_${sequence}`]}>
                            {getVariables(formula).map(variable => (
                                <UserInput
                                    key={`fid_${sequence}_${variable}`}
                                    name={`fid_${sequence}_${variable}`}
                                    label={`${variable}:`}
                                    value={this.state[`fid_${sequence}_${variable}`]}
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
