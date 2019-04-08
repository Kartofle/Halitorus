import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        marginTop: '1px',
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit * .5,
        width: 200,
    },
    smTextField: {
        marginTop: '1px',
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit * .5,
        width: 75,
    },
    rowBlock: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '16px 34px 0 0',
    },
});

const encumberance = (props) => {
    const { classes } = props
    return (
        <div className={classes.rowBlock}>
            <TextField
                id="total-weight"
                label="total wg"
                defaultValue=" "
                className={classes.smTextField}
                margin="dense"
                variant="outlined"
            /> 
            <TextField
                id="encumberance"
                label="Encumberance lvl"
                defaultValue="    L   /   M   /   H   /   O"
                className={classes.textField}
                margin="dense"
                variant="outlined"
            /> 
        </div>
    );
}

export default withStyles(styles)(encumberance);