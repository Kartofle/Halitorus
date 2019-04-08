import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
    small: {
        padding: '3px',
    },
    rowBlock: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '34px',
    }
}

const playersBlock = (props) => {
    const { classes } = props
    return (
        <div className={classes.rowBlock}>
            <h5>Player:</h5>
            <Checkbox 
                className={classes.small}
                color="primary" />
        </div>
    );
}

export default withStyles(styles)(playersBlock);