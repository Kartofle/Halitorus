import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import PlayerBlock from './PlayerBlock/PlayerBlock';
import CharOverview from './CharOverview/CharOverview';
import CharStats from './CharStats/CharStats';
import CharQuickSlots from './CharQuickSlots/CharQuickSlots';
import CharArmor from './CharArmor/CharArmor';
import CharWounds from './CharWounds/CharWounds';
import Cover from './Cover/Cover';
import Consiquences from './Consiquences/Consiquences';
import CharAbilities from './CharAbilities/CharAbilities';
import CharKnowledges from './CharKnowledges/CharKnowledges';
import CharWealth from './CharWealth/CharWealth';
import CharInventory from './CharInventory/CharInventory';

const styles = theme => ({
    form: {
        height: '100%',
        width: '80%',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        paddingBottom: '24px',
    },
    charSheet: {
        padding: '16px',
    },
    Qcontainer: {
        justifyContent: 'center',
        display: 'flex',
    },
    Wcontainer: {
        justifyContent: 'center',
        display: 'flex',
        marginTop: '12px',
    },
    ABIcontainer: {
        justifyContent: 'center',
        display: 'flex',
        marginTop: '12px',
    },
});

const characterSheet = (props) => {
    const { classes } = props;
    return (
        <form className={classes.form}>
            <div className={classes.charSheet}>
                <strong><h2>Lore Character Sheet</h2></strong>
                <PlayerBlock />
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
                <div className={classes.ABIcontainer}>
                    <CharAbilities />
                    <CharKnowledges />
                </div>
                <CharWealth />
                <CharInventory />
            </div>
        </form>
    );
}

export default withStyles(styles)(characterSheet);