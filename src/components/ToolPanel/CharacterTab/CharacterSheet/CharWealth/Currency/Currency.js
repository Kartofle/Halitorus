import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        width: 58,
    },
    longTextField: {
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit * .5,
        width: 110,
    },
    rowBlock: {
        justifyContent: 'center',
        display: 'flex',
    },
});

const currency = (props) => {
    const { classes } = props;
    return (
        <div className={classes.rowBlock}>
            <TextField
                id="region"
                label="Region"
                className={classes.longTextField}
                margin="dense"
            />
            <TextField
                id="pp"
                label="PP"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="gp"
                label="GP"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="ep"
                label="EP"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="sp"
                label="SP"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="cp"
                label="CP"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
        </div>
    );
}

export default withStyles(styles)(currency);