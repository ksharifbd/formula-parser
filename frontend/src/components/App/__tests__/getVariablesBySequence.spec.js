import {FORMULA_TRACKING_ID} from '../../../config.json';
import getVariablesBySequence from '../getVariablesBySequence';

describe('Get Variables By Sequence', () => {
    const state = {
        [`${FORMULA_TRACKING_ID}_1_x`]: 25,
        [`${FORMULA_TRACKING_ID}_1_y`]: 25,
        [`${FORMULA_TRACKING_ID}_1_z`]: 50,
        [`${FORMULA_TRACKING_ID}_2_p`]: 250,
        [`${FORMULA_TRACKING_ID}_2_q`]: 150,
        [`${FORMULA_TRACKING_ID}_3_d`]: 1,
        [`${FORMULA_TRACKING_ID}_3_f`]: 8,
        random: 34,
    };

    const output = [
        {
            "1": {
            "values": {
                "x": 25,
                "y": 25,
                "z": 50
            }
            }
        },
        {
            "2": {
            "values": {
                "p": 250,
                "q": 150
            }
            }
        },
        {
            "3": {
            "values": {
                "d": 1,
                "f": 8
            }
            }
        }
    ];

    it('should return empty array when state is not provided', () => {
        expect(getVariablesBySequence()).toHaveLength(0);
    });

    it('should return empty array when state is not provided', () => {
        expect(getVariablesBySequence()).not.toHaveLength(5);
    });

    it('should output correctly when state is provided', () => {
        expect(getVariablesBySequence(state)).toEqual(output);
    });
});
