import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        marginTop: '1px',
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit * .5,
        width: 240,
    },
    smTextField: {
        marginTop: '1px',
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit * .5,
        width: 25,
    },
    rowBlock: {
        display: 'flex',
    },
});

const inventorySlot = (props) => {
    const { classes } = props
    return (
        <div className={classes.rowBlock}>
            <TextField
                id="item-name"
                className={classes.textField}
                margin="dense"
            /> 
            <TextField
                id="item-weight"
                className={classes.smTextField}
                margin="dense"
            /> 
        </div>
    );
}

export default withStyles(styles)(inventorySlot);