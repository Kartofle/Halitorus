import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Wound from './Wound/Wound';
import Truama from './Truama/Truama';

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
    return (
        <div className={classes.container}>
            <div className={classes.label}>
                <h4 className={classes.h4W}>Wounds</h4>
                <Wound />
                <Wound />
                <Wound />
                <Wound />
                <Wound />
                <Wound />
                <Wound />
                <Wound />
                <Wound />
                <Wound />
                <Wound />
                <Wound />
                <Wound />
                <Wound />
                <Wound />
            </div>
            <div className={classes.label}>
                <h4 className={classes.h4T}>Truamas</h4>
                <Truama />
                <Truama />
                <Truama />
                <Truama />
                <Truama />
                <Truama />
                <Truama />
                <Truama />
                <Truama />
                <Truama />
                <Truama />
                <Truama />
                <Truama />
                <Truama />
                <Truama />
            </div>
        </div>
    );
}

export default withStyles(styles)(charWounds);