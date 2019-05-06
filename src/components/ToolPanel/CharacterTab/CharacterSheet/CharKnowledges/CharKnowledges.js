import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Knowledge from './Knowledge/Knowledge';

const styles = theme => ({
    textField: {
        marginTop: '2px',
        marginLeft: theme.spacing.unit * .5,
        marginRight: theme.spacing.unit * .5,
        width: 275,
    },
    columnBlock: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        margin: '1px 0'
    }
});

const charKnowledges = (props) => {
    const { classes } = props
    const knowledges = [];
    const studies = 10;
    for (var knowledgeBodies = 0; knowledgeBodies < studies; knowledgeBodies++){
        knowledges.push(<Knowledge key={knowledgeBodies}/>)
    }
    return (
        <div className={classes.columnBlock}>
            <h5 className={classes.label}>Knowledges</h5>
            {knowledges}
        </div>
    );
}

export default withStyles(styles)(charKnowledges);