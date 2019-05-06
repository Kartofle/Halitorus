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
    const conInputs = 3;
    const textFields = [];
    for (var textBoxes = 0; textBoxes < conInputs; textBoxes++){
        textFields.push(
            <TextField
                id={`${props.title}_${textFields.length}`}
                className={classes.textField}
                margin="dense"
            /> )
    };

    return (
        <div className={classes.columnBlock}>
            <h5 className={classes.label}>{props.title}</h5>
            {textFields}
        </div>
    );
}

export default withStyles(styles)(conBlock);