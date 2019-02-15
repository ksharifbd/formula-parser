import React from 'react';
import PropTypes from 'prop-types';

import classes from './MediaText.module.css';

const MediaText = ({width, left, right}) => (
    <div className={classes.MediaText} style={{width}}>
        <div className={classes.MediaText__left}>
            {left}
        </div>
        <div>
            {right}
        </div>
    </div>
);

MediaText.propTypes = {
    width: PropTypes.string.isRequired,
    left: PropTypes.node.isRequired,
    right: PropTypes.node.isRequired,
};

export default MediaText;
