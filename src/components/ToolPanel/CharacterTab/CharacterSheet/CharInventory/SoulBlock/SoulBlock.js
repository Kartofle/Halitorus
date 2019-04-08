import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        marginTop: '1px',
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit * .5,
        width: 60,
    },
    rowBlock: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '16px 0 0 34px',
    },
});

const soulBlock = (props) => {
    const { classes } = props
    return (
        <div className={classes.rowBlock}>
            <TextField
                id="players-soul"
                label="Soul"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            /> 
            <TextField
                id="souls"
                label="Souls"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            /> 
        </div>
    );
}

export default withStyles(styles)(soulBlock);