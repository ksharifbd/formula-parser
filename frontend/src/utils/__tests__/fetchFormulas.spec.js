import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {API_URL} from '../../config.json';
import fetchFormulas from '../fetchFormulas';

describe('Fetch Formulas', () => {
    const mock = new MockAdapter(axios);
    const data = [
        {
            "formula":"x+y-z"
        },
        {
            "formula":"a/d*f"
        },
    ];

    const output = ["x+y-z", "a/d*f"];

    it('should return array of formulas from the API response', done => {
        mock
            .onGet(`${API_URL}/formulas`)
            .reply(200, data);

        fetchFormulas().then(response => {
            expect(response).toEqual(output);
            done();
        });
    });
});
