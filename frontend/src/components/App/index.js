import React, { Component } from 'react';
import axios from 'axios';

import CalculatorUI from '../CalculatorUI';
import {getVariables} from '../../utils';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formulas: [],
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:3001/formulas')
            .then(response => {
                this.setState({formulas: response.data.map(datum => datum.formula)})
            })
            .catch(err => console.log(err));
    }

    render() {
        const {formulas} = this.state;
        return (
            <form>
                <ol>
                    {formulas.length > 0 && formulas.map((formula, index) => (
                        <CalculatorUI
                            key={formula}
                            sequence={index + 1}
                            formula={formula}
                            variables={getVariables(formula)}
                            value='2'
                            onChange={() => {}}
                            result={11} />
                    ))}
                </ol>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default App;
