import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ArmorSlot from './ArmorSlot/ArmorSlot';

const styles = theme => ({
    container: {
        justifyContent: 'center',
        display: 'flex',
    },
    columnBlock: {
        flexDirection: 'column',
    },
});

const charArmor = (props) => {
    const { classes } = props
    return (
        <div className={classes.columnBlock}>
            <ArmorSlot />
            <ArmorSlot />
            <ArmorSlot />
            <ArmorSlot />
            <ArmorSlot />
        </div>
    );
}

export default withStyles(styles)(charArmor);