import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import CharOverview from './CharOverview/CharOverview';
import CharStats from './CharStats/CharStats';
import CharQuickSlots from './CharQuickSlots/CharQuickSlots';

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
            <strong><h2>CharacterSheet</h2></strong>
            <CharOverview />
            <CharStats />
            <CharQuickSlots />
        </Paper>
    );
}

export default withStyles(styles)(characterSheet);