import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import QuickSlot from './QuickSlot/QuickSlot';

const styles = theme => ({
    container: {
        justifyContent: 'center',
    },
    columnBlock: {
        display: 'flex',
        flexDirection: 'column',
    },
});

const charQuickSlots = (props) => {
    const { classes } = props
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <div className={classes.columnBlock}>
                <QuickSlot />
                <QuickSlot />
                <QuickSlot /> 
                <QuickSlot />
                <QuickSlot />
            </div>
        </form>
    );
}

export default withStyles(styles)(charQuickSlots);