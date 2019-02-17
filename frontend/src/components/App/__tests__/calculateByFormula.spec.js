import calculateByFormula from '../calculateByFormula';

describe('Calculate by Formula', () => {
    const formula1 = 'a+b+c';
    const formula2 = 'a*b*c';

    const obj = {
        a: 3,
        b: 4,
        c: 8,
    };

    it('should throw Error if no input is given', () => {
        expect(() => {
            calculateByFormula();
        }).toThrowError(ReferenceError);
    });

    it('should throw Error if correct values are not given', () => {
        expect(() => {
            calculateByFormula(formula1, {x: 1, y: 4});
        }).toThrowError(ReferenceError);
    });

    it('should return 15 when correct inputs are provided', () => {
        expect(calculateByFormula(formula1, obj)).toBe(15);
    });

    it('should return 96 when correct inputs are provided', () => {
        expect(calculateByFormula(formula2, obj)).toBe(96);
    });
});
