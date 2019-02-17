import getVariables from '../getVariables';

describe('Get Variables', () => {
    it('should return empty array if no input is provided', () => {
        expect(getVariables()).toHaveLength(0);
    });

    it('should not return null if no input is provided', () => {
        expect(getVariables()).not.toBeNull();
    });

    it('should return ["a", "b", "c"] if input is "a+b+c"', () => {
        expect(getVariables('a+b+c')).toEqual(['a', 'b', 'c']);
    });

    it('should return ["x", "y"] if input is "x/y"', () => {
        expect(getVariables('x/y')).toEqual(['x', 'y']);
    });
});
