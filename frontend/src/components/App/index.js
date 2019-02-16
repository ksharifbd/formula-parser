import React, { Component } from 'react';

import Calculator from '../Calculator';

class App extends Component {
    render() {
        return (
            <form>
                <ol>
                    <Calculator
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
