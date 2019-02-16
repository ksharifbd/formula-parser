import React from 'react';
import PropTypes from 'prop-types';

import classes from './MediaText.module.css';

const MediaText = ({marginRight, left, right}) => (
    <div className={classes.MediaText}>
        <div className={classes.MediaText__Left} style={{marginRight}}>
            {left}
        </div>
        <div className={classes.MediaText__Right}>
            {right}
        </div>
    </div>
);

MediaText.propTypes = {
    marginRight: PropTypes.string,
    left: PropTypes.node.isRequired,
    right: PropTypes.node.isRequired,
};

MediaText.defaultProps = {
    marginRight: 'auto',
}

export default MediaText;
