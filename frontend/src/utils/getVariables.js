function getVariables(str = '') {
    return str.match(/[a-z]/g) || []; 
}

export default getVariables;
