import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Ability from './Ability/Ability';

const styles = theme => ({
    columnBlock: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        margin: '1px 0'
    }
});

const charAbilities = (props) => {
    const { classes } = props
    return (
        <div className={classes.columnBlock}>
            <h5 className={classes.label}>Abilities</h5>
            <Ability />
            <Ability />
            <Ability />
            <Ability />
            <Ability />
            <Ability />
            <Ability />
            <Ability />
            <Ability />
            <Ability />
        </div>
    );
}

export default withStyles(styles)(charAbilities);