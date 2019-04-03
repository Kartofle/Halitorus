import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
        <form className={classes.container} noValidate autoComplete="off">
            <div className={classes.columnBlock}>
                <ArmorSlot />
                <ArmorSlot />
                <ArmorSlot />
                <ArmorSlot />
                <ArmorSlot />
            </div>
        </form>
    );
}

export default withStyles(styles)(charArmor);