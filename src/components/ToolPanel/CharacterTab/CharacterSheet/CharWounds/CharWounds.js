import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Wound from './Wound/Wound';
import Stress from './Stress/Stress';

const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: '10px 0 0 45px',
    },
    label: {
        display: 'flex',
    },
    h4: {
        margin: '3px 0'
    }
});

const charWounds = (props) => {
    const { classes } = props
    return (
        <div className={classes.container}>
            <div className={classes.label}>
                <h4 className={classes.h4}>Wounds</h4>
                <Wound />
                <Wound />
            </div>
            <div className={classes.label}>
                <h4 className={classes.h4}>Stresses</h4>
                <Stress />
                <Stress />
            </div>
        </div>
    );
}

export default withStyles(styles)(charWounds);