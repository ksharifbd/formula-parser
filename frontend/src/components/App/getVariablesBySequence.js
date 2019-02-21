import getMappedInputStates from './getMappedInputStates';

function getVariablesBySequence(state = {}) {
    const mappedInputStates = getMappedInputStates(state);

    const uniqueSequences = [...new Set(mappedInputStates.map(state => state.sequence))];
    
    return uniqueSequences.map(sequence => {
        const mappedByVariables = mappedInputStates
            .filter(state => state.sequence === sequence)
            .map(state => state.values)
            .map (state => {
                return {
                    [state.variable]: state.value,
                }
            })
    
        return {
            [sequence]: {
                values: {...mappedByVariables},
            }
        };
    });
    
}

export default getVariablesBySequence;
