import constructInputStates from './constructInputStates';
import constructResultStates from './constructResultStates';

function constructInitialState(arr = []) {
    const inputStates = constructInputStates(arr);
    const resultStates = constructResultStates(arr);

    return {...inputStates, formulas: [], ...resultStates};
}

export default constructInitialState;
