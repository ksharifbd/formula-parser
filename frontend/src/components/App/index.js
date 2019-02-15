import React, { Component } from 'react';

import MediaText from '../MediaText';
import UserInput from '../UserInput';

class App extends Component {
    render() {
        return (
            <form>
                <ul>
                    <li style={{display: 'flex', flexDirection: 'row'}}>
                        <p style={{marginRight: '1rem'}}>1.</p>
                        <div>
                            <MediaText
                                width='13.5rem'
                                left={<p>Formula:</p>}
                                right={<p>a+b+2+x</p>} />
                            <p>Inputs:</p>
                            <UserInput
                                label='a'
                                value='2' />
                            <MediaText
                                width='8.5rem'
                                left={<p>Result:</p>}
                                right={<p>11</p>} />
                        </div>
                    </li>
                </ul>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default App;
