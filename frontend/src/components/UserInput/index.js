import React from 'react';
import PropTypes from 'prop-types';

import MediaText from '../MediaText';
import classes from './UserInput.module.css';

const UserInput = ({label, value}) => (
    <MediaText
        width='25rem'
        left={<label>{label}</label>}
        right={<input
                type='text' 
                value={value}
                className={classes.UserInput__input} />} />
);

UserInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

export default UserInput;
