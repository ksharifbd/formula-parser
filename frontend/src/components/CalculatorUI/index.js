import React from 'react';
import PropTypes from 'prop-types';

import MediaText from '../MediaText';
import classes from './CalculatorUI.module.css';

const CalculatorUI = ({
    sequence,
    formula,
    children,
    result,
}) => (
    <li className={classes.CalculatorUI}>
        <p className={classes.CalculatorUI__Sequence}>{sequence}.</p>
        <div>
            <MediaText
                marginRight='.8rem'
                left={<p>Formula:</p>}
                right={<p>{formula}</p>} />
            <p>Inputs:</p>
            {children}
            <MediaText
                marginRight='2rem'
                left={<p>Result:</p>}
                right={<p>{result}</p>} />
        </div>
    </li>
);

CalculatorUI.propTypes = {
    sequence: PropTypes.number.isRequired,
    formula: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element),
    result: PropTypes.number.isRequired,
};

export default CalculatorUI;
