import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ConBlock from './ConBlock/ConBlock';

const styles = theme => ({
    container: {
        justifyContent: 'center',
        display: 'flex',
        marginTop: '6px',
    },
});

const consequences = (props) => {
    const { classes } = props
    const consequences = ["Physical", "Mental", "Story"];

    return (
        <div className={classes.container}>
        {
            consequences.map((title, index) => 
            <ConBlock key={index} title={title}/>)
        }
        </div>
    );
}

export default withStyles(styles)(consequences);