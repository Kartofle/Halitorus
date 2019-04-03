import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import CharOverview from './CharOverview/CharOverview';
import CharStats from './CharStats/CharStats';
import CharQuickSlots from './CharQuickSlots/CharQuickSlots';
import CharArmor from './CharArmor/CharArmor';
import CharWounds from './CharWounds/CharWounds';

const styles = theme => ({
    paper: {
        height: '-webkit-fill-available',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    QScontainer: {
        justifyContent: 'space-evenly',
        display: 'flex',
    },
});

const characterSheet = (props) => {
    const { classes } = props;
    return (
        <Paper className={classes.paper}>
            <strong><h2>Lore Character Sheet</h2></strong>
            <CharOverview />
            <CharStats />
            <div className={classes.QScontainer}>
                <CharQuickSlots />
                <CharArmor />
            </div>
            <CharWounds />
        </Paper>
    );
}

export default withStyles(styles)(characterSheet);