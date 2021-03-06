import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
    stress: {
        padding: '3px',
    }
}

const trauma = (props) => {
    const { classes } = props
    return (
        <Checkbox className={classes.stress} />
    );
}

export default withStyles(styles)(trauma);