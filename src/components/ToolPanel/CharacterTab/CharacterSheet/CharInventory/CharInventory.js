import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import InventoryLine from './InventroyLine/InventoryLine';
import Encumberance from './Encumberance/Encumberance';
import SoulBlock from './SoulBlock/SoulBlock'; 


const styles = theme => ({
    container: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '6px',
    },
    rowBlock: {
        justifyContent: 'space-between',
        display: 'flex',
    },
    label: {
        margin: '1px 0'
    }
});

const charInventory = (props) => {
    const { classes } = props
    return (
        <div className={classes.container}>
            <h5 className={classes.label}>Inevntory</h5>
            <InventoryLine />
            <InventoryLine />
            <InventoryLine />
            <InventoryLine />
            <InventoryLine />
            <InventoryLine />
            <InventoryLine />
            <InventoryLine />
            <InventoryLine />
            <InventoryLine />
            <div className={classes.rowBlock}> 
                <SoulBlock />
                <Encumberance />
            </div>
        </div>
    );
}

export default withStyles(styles)(charInventory);