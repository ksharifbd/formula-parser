import fetchFormulas from '../utils/fetchFormulas';
import constructInitialState from './constructInitialState';

function getInitialState() {
    return fetchFormulas().then(response => {
        if (Array.isArray(response)) {
            return constructInitialState(response);
        }
        return response;
    });
}

export default getInitialState;
