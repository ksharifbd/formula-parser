import React from 'react';
import ReactDOM from 'react-dom';
import {STORAGE_KEY} from './config.json'
import './index.css';
import App from './components/App';
import getInitialState from './getInitialState';

getInitialState().then(state => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    ReactDOM.render(<App />, document.getElementById('root'));
});
