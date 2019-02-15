import React from 'react';
import PropTypes from 'prop-types';

import MediaText from '../MediaText';

const UserInput = ({label, value}) => (
    <MediaText
        width='25rem'
        left={<label>{label}</label>}
        right={<input type='text' value={value} />} />
);

UserInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

export default UserInput;
