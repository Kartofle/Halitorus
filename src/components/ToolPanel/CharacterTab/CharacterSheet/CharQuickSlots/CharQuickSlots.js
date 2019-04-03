import React from 'react';
import { withStyles } from '@material-ui/core/styles';

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
        <div className={classes.columnBlock}>
            <QuickSlot />
            <QuickSlot />
            <QuickSlot /> 
            <QuickSlot />
            <QuickSlot />
        </div>
    );
}

export default withStyles(styles)(charQuickSlots);