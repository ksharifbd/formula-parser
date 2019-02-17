function calculateByFormula(formula = '', obj = {}) {
    const evalableFormula = formula
    .split('')
    .map(el => (obj[el] || obj[el] === 0) ? obj[el] : el)
    .join('');

    if(evalableFormula === formula) {
        throw new ReferenceError('Object keys MUST match formula variables');
    } 

    // eslint-disable-next-line no-eval
    return eval(evalableFormula) || 0;
}

export default calculateByFormula;
