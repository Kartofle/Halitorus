import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Wound from './Wound/Wound';
import Trauma from './Trauma/Trauma';

const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: '0 0 0 5px',
    },
    label: {
        display: 'flex',
    },
    h4W: {
        margin: '3px 4px 3px 0',
    },
    h4T: {
        margin: '3px 0',
    }
});

const charWounds = (props) => {
    const { classes } = props

    const totalWounds = [];
    var wounds = 2; 

    const totalTraumas = [];
    var traumas = 2;

    for (var hearts = 0; hearts < wounds; hearts++) {
        totalWounds.push(<Wound key={hearts}/>)   
    };

    for (var headaches = 0; headaches < traumas; headaches++) {
        totalTraumas.push(<Trauma key={headaches}/>)   
    };
    return (
        <div className={classes.container}>
            <div className={classes.label}>
                <h4 className={classes.h4W}>Wounds</h4>
                {totalWounds}
            </div>
            <div className={classes.label}>
                <h4 className={classes.h4T}>Traumas</h4>
                {totalTraumas}
            </div>
        </div>
    );
}

export default withStyles(styles)(charWounds);