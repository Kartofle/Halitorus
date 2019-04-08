import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import InventorySlot from './InventorySlot/InventorySlot';

const styles = theme => ({
    container: {
        justifyContent: 'center',
        display: 'flex',
        marginTop: '6px',
    },
});

const inventoryLine = (props) => {
    const { classes } = props
    return (
        <div className={classes.container}>
            <InventorySlot />
            <InventorySlot />
            <InventorySlot />
        </div>
    );
}

export default withStyles(styles)(inventoryLine);