import axios from 'axios';

import {API_URL} from '../config.json';

function fetchFormulas() {
    return axios
    .get(`${API_URL}/formulas`)
    .then(response => response.data.map(datum => datum.formula))
    .catch(err => err);
}

export default fetchFormulas;
