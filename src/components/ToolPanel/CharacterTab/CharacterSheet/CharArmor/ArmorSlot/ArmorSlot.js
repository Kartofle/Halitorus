import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
    container: {
        justifyContent: 'center',
        display: 'flex',
    },
    textField: {
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit  * .5,
        width: 150,
    },
    medTextField: {
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit * .5,
        width: 80,
    },
    thinTextField: {
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit * .5,
        width: 40,
    },
    rowBlock: {
        display: 'flex',
    },
});

const armorSlot = (props) => {
    const { classes } = props
    return (
        <div className={classes.rowBlock}>
            <TextField
                id="armor"
                placeholder="Armor"
                className={classes.textField}
                margin="dense"
                startadornment={
                    <InputAdornment position="start">
                        {/* {props.icon} */}
                    </InputAdornment>
                }
            />
            <TextField
                id="hardness"
                placeholder="HR"
                className={classes.thinTextField}
                margin="dense"
            /> 
            <TextField
                id="durability"
                placeholder="         /"
                className={classes.medTextField}
                margin="dense"
            />
        </div>
    );
}

export default withStyles(styles)(armorSlot);