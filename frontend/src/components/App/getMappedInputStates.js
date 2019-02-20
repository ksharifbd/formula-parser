import {FORMULA_TRACKING_ID} from '../../config.json';

function getMappedInputStates(state = {}) {
    return Object
    .entries(state)
    .filter(state => state[0].indexOf(`${FORMULA_TRACKING_ID}`) > -1)
    .filter(state => state[0].indexOf('result')  === -1)
    .map(state => {
        const stateKey = state[0].slice(state[0].indexOf('_') + 1);
        const variable = stateKey.slice(stateKey.indexOf('_' + 1));
        const value = Number(state[1]);
        
        return {
            sequence: stateKey.slice(0, stateKey.indexOf('_')),
            values: {
                variable,
                value,
            }
        };
    });
}

export default getMappedInputStates;
