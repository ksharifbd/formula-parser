import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import UserInput from './';

describe('User Input', () => {
    const tree = shallow(
        <UserInput
            label='x'
            name='x'
            value='2'
            onChange={jest.fn}
        />
    );

    it('should render correctly', () => {
        expect(toJson(tree)).toMatchSnapshot();
    });
});
