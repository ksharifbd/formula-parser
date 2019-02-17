import {
    fetchFormulas,
    constructInitialState
} from '../utils';

function getInitialState() {
    return fetchFormulas().then(response => {
        if (Array.isArray(response)) {
            return constructInitialState(response);
        }
        return response;
    });
}

export default getInitialState;
