import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    paper: {
        height: '-webkit-fill-available',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

const characterSheet = (props) => {
    const { classes } = props;
    return (
        <Paper className={classes.paper}>
            CharacterSheet
        </Paper>
    );
}

export default withStyles(styles)(characterSheet);