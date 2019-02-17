import {getVariables} from '../utils';

function constructInitialState(arr) {
    const inputStates = arr.reduce((acc, cur, idx) => {
        getVariables(cur).map(variable => {
            return acc[`fid_${idx + 1}_${variable}`] = '';
        });
        return acc;
    }, {});

    const resultStates = arr.reduce((acc, cur, idx) => {
        acc[`result_fid_${idx + 1}`] = 0;

        return acc;
    }, {});

    return {...inputStates, formulas: [], ...resultStates};
}

export default constructInitialState;
