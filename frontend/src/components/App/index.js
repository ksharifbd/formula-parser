import React, { Component } from 'react';

import CalculatorUI from '../CalculatorUI';

class App extends Component {
    render() {
        return (
            <form>
                <ol>
                    <CalculatorUI
                        sequence={1}
                        formula='a+b+c'
                        variables={['a', 'b', 'c']}
                        value='2'
                        onChange={() => {}}
                        result='11' />
                </ol>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default App;
