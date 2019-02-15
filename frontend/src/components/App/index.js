import React, { Component } from 'react';

import UserInput from '../UserInput';

class App extends Component {
    render() {
        return (
            <form>
                <ul>
                    <li style={{display: 'flex', flexDirection: 'row'}}>
                        <p style={{marginRight: '1rem'}}>1.</p>
                        <div>
                            <p>Formula: a+b+2+x</p>
                            <p>Inputs:</p>
                            <UserInput
                                label='a'
                                value='2' />
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <p style={{marginRight: '2rem'}}>Result:</p>
                                <p>11</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default App;
