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
    smallTextField: {
        marginTop: '1px',
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit * .5,
        width: 50,
    },
    rowBlock: {
        display: 'flex',
    },
});

const knowledge = (props) => {
    const { classes } = props
    return (
        <div className={classes.rowBlock}>
            <TextField
                id="knowledge"
                className={classes.textField}
                margin="dense"
            /> 
            <TextField
                id="knowledge-lvl"
                className={classes.smallTextField}
                margin="dense"
                placeholder="lvl"
            />
        </div>
    );
}

export default withStyles(styles)(knowledge);