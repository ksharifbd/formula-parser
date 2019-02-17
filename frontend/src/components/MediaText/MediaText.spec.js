import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import MediaText from './';

describe('Media Text', () => {
    const tree = (marginRight) => shallow(
        <MediaText
            marginRight={marginRight}
            left={<span />}
            right={<span />}
        />
    );

    it('should render correctly with the given marginRight', () => {
        expect(toJson(tree('1rem'))).toMatchSnapshot();
    });

    it('should render correctly with the default marginRight', () => {
        expect(toJson(tree())).toMatchSnapshot();
    });
});
