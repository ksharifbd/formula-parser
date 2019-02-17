function calculateByFormula(formula, obj) {
    const evalableFormula = formula
    .split('')
    .map(el => (obj[el] || obj[el] === 0) ? obj[el] : el)
    .join('');

    // eslint-disable-next-line no-eval
    return eval(evalableFormula) || 0;
}

export default calculateByFormula;
