import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
    },
    textField: {
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit * .5,
        width: 150,
    },
    thinTextField: {
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit * .5,
        width: 40,
    },
    columnBlock: {
        display: 'flex',
        flexDirection: 'column',
    },
    rowBlock: {
        display: 'flex',
    },
});

const quickSlot = (props) => {
    const { classes } = props
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <div className={classes.rowBlock}>
                <TextField
                    id="item-name"
                    placeholder="Item"
                    className={classes.textField}
                    margin="dense"
                /> 
                <TextField
                    id="combat-skill"
                    placeholder="CS"
                    className={classes.thinTextField}
                    margin="dense"
                /> 
                <TextField
                    id="armor-pen"
                    placeholder="AP"
                    className={classes.thinTextField}
                    margin="dense"
                />
                <TextField
                    id="damage"
                    placeholder="Damage"
                    className={classes.textField}
                    margin="dense"
                /> 
            </div>
        </form>
    );
}

export default withStyles(styles)(quickSlot);