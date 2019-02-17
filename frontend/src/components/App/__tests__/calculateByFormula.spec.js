import calculateByFormula from '../calculateByFormula';

describe('Calculate by Formula', () => {
    const formula = 'a+b+c';
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
            calculateByFormula(formula, {x: 1, y: 4});
        }).toThrowError(ReferenceError);
    });

    it(`should return 15 when formula is ${formula} and object is ${obj}`, () => {
        expect(calculateByFormula(formula, obj)).toBe(15);
    })
});
