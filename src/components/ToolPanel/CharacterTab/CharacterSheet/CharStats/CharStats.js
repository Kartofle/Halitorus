import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 90,
    },
    rowBlock: {
        margin: '0 30px',
        justifyContent: 'space-evenly',
        display: 'flex',
    },
});

const charStats = (props) => {
    const { classes } = props;
    return (
        <div className={classes.rowBlock}>
            <TextField
                id="agility"
                label="AGI"
                multiline
                rows="2"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="coordination"
                label="COR"
                multiline
                rows="2"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="strength"
                label="STR"
                multiline
                rows="2"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="endurance"
                label="END"
                multiline
                rows="2"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="perception"
                label="PER"
                multiline
                rows="2"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="aptitude"
                label="APT"
                multiline
                rows="2"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="affinaty"
                label="AFN"
                multiline
                rows="2"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="resolve"
                label="RSV"
                multiline
                rows="2"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
        </div>
    );
}

export default withStyles(styles)(charStats);