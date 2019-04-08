import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        marginTop: '1px',
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit * .5,
        width: 275,
    },
    columnBlock: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        margin: '1px 0'
    }
});

const conBlock = (props) => {
    const { classes } = props
    return (
        <div className={classes.columnBlock}>
            <h5 className={classes.label}>Test</h5>
            <TextField
                id="body-con-1"
                className={classes.textField}
                margin="dense"
            /> 
            <TextField
                id="body-con-2"
                className={classes.textField}
                margin="dense"
            /> 
            <TextField
                id="body-con-3"
                className={classes.textField}
                margin="dense"
            /> 
        </div>
    );
}

export default withStyles(styles)(conBlock);