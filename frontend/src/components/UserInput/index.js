import React from 'react';
import PropTypes from 'prop-types';

import MediaText from '../MediaText';
import classes from './UserInput.module.css';

const UserInput = ({label, value, onChange}) => (
    <MediaText
        marginRight='6rem'
        left={<label>{label}</label>}
        right={<input
                type='text' 
                value={value}
                className={classes.UserInput__input}
                onChange={onChange} />} />
);

UserInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default UserInput;
