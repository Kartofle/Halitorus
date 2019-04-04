import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ConBlock from './ConBlock/ConBlock';

const styles = theme => ({
    container: {
        justifyContent: 'center',
        display: 'flex',
        marginTop: '8px',
    },
});

const consiquences = (props) => {
    const { classes } = props
    return (
        <div className={classes.container}>
            <ConBlock />
            <ConBlock />
            <ConBlock />
        </div>
    );
}

export default withStyles(styles)(consiquences);