import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import CharOverview from './CharOverview/CharOverview';
import CharStats from './CharStats/CharStats';
import CharQuickSlots from './CharQuickSlots/CharQuickSlots';
import CharArmor from './CharArmor/CharArmor';
import CharWounds from './CharWounds/CharWounds';
import Cover from './Cover/Cover';
import Consiquences from './Consiquences/Consiquences';

const styles = theme => ({
    paper: {
        height: '100%',
        width: '80%',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        paddingBottom: '24px',
    },
    Qcontainer: {
        justifyContent: 'space-evenly',
        display: 'flex',
    },
    Wcontainer: {
        justifyContent: 'space-between',
        display: 'flex',
        margin: '10px 40px 0',
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
            <Consiquences />
        </Paper>
    );
}

export default withStyles(styles)(characterSheet);