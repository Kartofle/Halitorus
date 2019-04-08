import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        justifyContent: 'center',
        display: 'flex',
    },
    textField: {
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit * .5,
        width: 150,
    },
    longTextField: {
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit * .5,
        width: 200,
    },
    columnBlock: {
        display: 'flex',
        flexDirection: 'column',
    },
    rowBlock: {
        display: 'flex',
    },
});

const charOverview = (props) => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <div className={classes.columnBlock}>
                <TextField
                    id="chacater-name"
                    placeholder="Name"
                    className={classes.longTextField}
                    margin="dense"
                /> 
                <TextField
                    id="race"
                    placeholder="Race"
                    className={classes.longTextField}
                    margin="dense"
                /> 
            </div>
            <div className={classes.columnBlock}>
                <div className={classes.rowBlock}>
                    <TextField
                        id="bloodline"
                        placeholder="Bloodline"
                        className={classes.textField}
                        margin="dense"
                    /> 
                    <TextField
                        id="sign"
                        placeholder="Sign"
                        className={classes.textField}
                        margin="dense"
                    /> 
                    <TextField
                        id="age"
                        placeholder="Age"
                        className={classes.textField}
                        margin="dense"
                    />
                </div>
                <div className={classes.rowBlock}>
                    <TextField
                        id="initative"
                        placeholder="Initative"
                        className={classes.textField}
                        margin="dense"
                    />
                    <TextField
                        id="speed"
                        placeholder="Speed"
                        className={classes.textField}
                        margin="dense"
                    /> 
                    <TextField
                        id="size"
                        placeholder="Size"
                        className={classes.textField}
                        margin="dense"
                    />
                </div>
            </div>
            <TextField
                id="competence-rating"
                label="Competence Rating"
                multiline
                rows="2"
                defaultValue="   B   |   M   |   S"
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
        </div> 
    );
}

export default withStyles(styles)(charOverview);