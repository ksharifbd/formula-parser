import React from 'react';
import ReactDOM from 'react-dom';
import {STORAGE_KEY} from './config.json'
import App from './components/App';
import getInitialState from './getInitialState';
import './index.css';

getInitialState().then(state => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    ReactDOM.render(<App />, document.getElementById('root'));
});
