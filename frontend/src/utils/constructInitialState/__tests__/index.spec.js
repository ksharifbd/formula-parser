import {FORMULA_TRACKING_ID} from '../../../config.json';
import constructInitialState from '../';

describe('Construct Initial State', () => {
    const input = ['2*x+y-z', 'a/d*f+5'];
    const output = {
        [`${FORMULA_TRACKING_ID}_1_x`]: '',
        [`${FORMULA_TRACKING_ID}_1_y`]: '',
        [`${FORMULA_TRACKING_ID}_1_z`]: '',
        [`${FORMULA_TRACKING_ID}_2_a`]: '',
        [`${FORMULA_TRACKING_ID}_2_d`]: '',
        [`${FORMULA_TRACKING_ID}_2_f`]: '',
        formulas: [],
        [`result_${FORMULA_TRACKING_ID}_1`]: 0,
        [`result_${FORMULA_TRACKING_ID}_2`]: 0,
    };

    it('should return formulas if no input is provided', () => {
        expect(constructInitialState()).toMatchObject({formulas: []});
    });

    it('should return correct output when appropriate input is provided', () => {
        expect(constructInitialState(input)).toMatchObject(output);
    });

    it('should return correct output when appropriate input is provided', () => {
        expect(constructInitialState(input)).not.toMatchObject({random: 'object'});
    });
});
