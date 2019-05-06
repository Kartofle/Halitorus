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
    const abilities = [];
    const skills = 10;
    for (var charSkills = 0; charSkills < skills; charSkills++){
        abilities.push(<Ability key={charSkills}/>)
    };
    return (
        <div className={classes.columnBlock}>
            <h5 className={classes.label}>Abilities</h5>
            {abilities}
        </div>
    );
}

export default withStyles(styles)(charAbilities);