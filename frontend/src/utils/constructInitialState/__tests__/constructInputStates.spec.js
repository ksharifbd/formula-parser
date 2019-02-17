import {FORMULA_TRACKING_ID} from '../../../config.json';
import constructInputStates from '../constructInputStates';

describe('Construct Input States', () => {
    const input = ['2*x+y-z', 'a/d*f+5'];
    const output = {
        [`${FORMULA_TRACKING_ID}_1_x`]: '',
        [`${FORMULA_TRACKING_ID}_1_y`]: '',
        [`${FORMULA_TRACKING_ID}_1_z`]: '',
        [`${FORMULA_TRACKING_ID}_2_a`]: '',
        [`${FORMULA_TRACKING_ID}_2_d`]: '',
        [`${FORMULA_TRACKING_ID}_2_f`]: '',
    };

    it('should return empty object if no input is provided', () => {
        expect(constructInputStates()).toEqual({});
    });

    it('should return correct output when appropriate input is provided', () => {
        expect(constructInputStates(input)).toMatchObject(output);
    });
});
