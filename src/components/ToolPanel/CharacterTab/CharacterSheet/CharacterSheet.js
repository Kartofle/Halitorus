import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import CharOverview from './CharOverview/CharOverview';
import CharStats from './CharStats/CharStats';
import CharQuickSlots from './CharQuickSlots/CharQuickSlots';
import CharArmor from './CharArmor/CharArmor';
import CharWounds from './CharWounds/CharWounds';
import Cover from './Cover/Cover';

const styles = theme => ({
    paper: {
        height: '-webkit-fill-available',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    Qcontainer: {
        justifyContent: 'space-evenly',
        display: 'flex',
    },
    Wcontainer: {
        justifyContent: 'space-between',
        display: 'flex',
        margin: '0 40px',
    },
});

const characterSheet = (props) => {
    const { classes } = props;
    return (
        <Paper className={classes.paper}>
            <strong><h2>Lore Character Sheet</h2></strong>
            <CharOverview />
            <CharStats />
            <div className={classes.Qcontainer}>
                <CharQuickSlots />
                <CharArmor />
            </div>
            <div className={classes.Wcontainer}>
                <CharWounds />
                <Cover />
            </div>
        </Paper>
    );
}

export default withStyles(styles)(characterSheet);