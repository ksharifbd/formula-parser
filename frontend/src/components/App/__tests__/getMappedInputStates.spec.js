import getMappedInputStates from '../getMappedInputStates';

describe('Get Mapped Input States', () => {
    const state = {
        fid_1_x: 25,
        fid_1_y: 25,
        fid_1_z: 50,
        fid_2_p: 250,
        fid_2_q: 150,
        fid_3_d: 1,
        fid_3_f: 8,
        random: 34,
    };

    const output = [ 
        { sequence: '1', values: { variable: 'x', value: 25 } },
        { sequence: '1', values: { variable: 'y', value: 25 } },
        { sequence: '1', values: { variable: 'z', value: 50 } },
        { sequence: '2', values: { variable: 'p', value: 250 } },
        { sequence: '2', values: { variable: 'q', value: 150 } },
        { sequence: '3', values: { variable: 'd', value: 1 } },
        { sequence: '3', values: { variable: 'f', value: 8 } } 
    ];

    it('should return empty array when state is not provided', () => {
        expect(getMappedInputStates()).toHaveLength(0);
    });

    it('should return empty array when state is not provided', () => {
        expect(getMappedInputStates()).not.toHaveLength(5);
    })

    it('should output correctly when state is provided', () => {
        expect(getMappedInputStates(state)).toEqual(output);
    })
});
