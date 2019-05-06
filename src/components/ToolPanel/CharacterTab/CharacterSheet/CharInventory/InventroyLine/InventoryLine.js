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
    const invLine = [];
    const invRows = 3;
    for (var iRows = 0; iRows < invRows; iRows++){
        invLine.push(<InventorySlot key={iRows}/>)
    }
    return (
        <div className={classes.container}>
            {invLine}
        </div>
    );
}

export default withStyles(styles)(inventoryLine);