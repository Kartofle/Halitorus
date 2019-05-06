import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        marginTop: '1px',
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit * .5,
        width: 280,
    },
    dice: {
        borderBottom: 'thin solid grey',
        marginBottom: '4px',
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    rowBlock: {
        display: 'flex',
    },
});

const ability = (props) => {
    const { classes } = props
    return (
        <div className={classes.rowBlock}>
            <TextField
                id="ability"
                className={classes.textField}
                margin="dense"
            /> 
            <div className={classes.dice}>
                dice
            </div>
        </div>
    );
}

export default withStyles(styles)(ability);