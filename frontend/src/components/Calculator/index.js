import React from 'react';
import PropTypes from 'prop-types';

import MediaText from '../MediaText';
import UserInput from '../UserInput';
import classes from './Calculator.module.css';

const Calculator = ({
    sequence,
    formula,
    variables,
    value,
    onChange,
    result,
}) => (
    <li className={classes.Calculator}>
        <p className={classes.Calculator__Sequence}>{sequence}.</p>
        <div>
            <MediaText
                marginRight='.8rem'
                left={<p>Formula:</p>}
                right={<p>{formula}</p>} />
            <p>Inputs:</p>
            {variables.map(variable => (
                <UserInput
                    key={variable}
                    label={`${variable}:`}
                    value={value}
                    onChange={onChange} />
            ))}
            <MediaText
                marginRight='2rem'
                left={<p>Result:</p>}
                right={<p>{result}</p>} />
        </div>
    </li>
);

Calculator.propTypes = {
    sequence: PropTypes.number.isRequired,
    formula: PropTypes.string.isRequired,
    variables: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    result: PropTypes.number.isRequired,
};

export default Calculator;
