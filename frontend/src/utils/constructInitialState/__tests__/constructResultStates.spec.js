import {FORMULA_TRACKING_ID} from '../../../config.json';
import constructResultStates from '../constructResultStates';

describe('Construct Result States', () => {
    const input = ['2*x+y-z', 'a/d*f+5'];
    const output = {
        [`result_${FORMULA_TRACKING_ID}_1`]: 0,
        [`result_${FORMULA_TRACKING_ID}_2`]: 0,
    };

    it('should return empty object if no input is provided', () => {
        expect(constructResultStates()).toEqual({});
    });

    it('should return correct output when appropriate input is provided', () => {
        expect(constructResultStates(input)).toMatchObject(output);
    });
});
