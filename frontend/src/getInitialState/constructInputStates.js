import {getVariables} from '../utils';

function constructInputStates(arr) {
    return arr.reduce((acc, cur, idx) => {
        getVariables(cur).map(variable => {
            return acc[`fid_${idx + 1}_${variable}`] = '';
        });
        return acc;
    }, {});
}

export default constructInputStates;
