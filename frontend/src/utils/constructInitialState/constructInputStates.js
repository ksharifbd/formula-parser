import {getVariables} from '../../utils';
import {FORMULA_TRACKING_ID} from '../../config.json';

function constructInputStates(arr) {
    return arr.reduce((acc, cur, idx) => {
        getVariables(cur).map(variable => {
            return acc[`${FORMULA_TRACKING_ID}_${idx + 1}_${variable}`] = '';
        });
        return acc;
    }, {});
}

export default constructInputStates;
