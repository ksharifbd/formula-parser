import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import CalculatorUI from './';

describe('Calculator UI', () => {
    const tree = shallow(
        <CalculatorUI
            sequence={1}
            formula='a+b'
            result={5}>
                {['a', 'b'].map(el => <span key={el}>{el}</span>)}
            </CalculatorUI>
    );

    it('should render correctly ', () => {
        expect(toJson(tree)).toMatchSnapshot();
    });
});
