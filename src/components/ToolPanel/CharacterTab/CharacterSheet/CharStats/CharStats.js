import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        justifyContent: 'space-evenly',
        display: 'flex',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 90,
        // flex: 1,
    },
    rowBlock: {
        display: 'flex',
    },
});

const charStats = (props) => {
    const { classes } = props;
    return (
        <form className={classes.container} noValidate autoComplete="off">
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
        </form>
    );
}

export default withStyles(styles)(charStats);