import {FORMULA_TRACKING_ID} from '../../config.json';

function constructResultStates(arr) {
    return arr.reduce((acc, cur, idx) => {
        acc[`result_${FORMULA_TRACKING_ID}_${idx + 1}`] = 0;

        return acc;
    }, {});
}

export default constructResultStates;
