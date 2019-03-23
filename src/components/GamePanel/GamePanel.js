import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';

import Game from './Game/Game';

const styles = theme => ({
    root: {
        height: '500px',
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        height: '100%',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    fab: {
        margin: theme.spacing.unit,
    },
    title: {
        marginBottom: '16px', 
    }
  });

const gamePanel = (props) => {
    const { classes } = props;
    return (
        <Paper className={classes.paper}>
            <div className={classes.title} >Current Campaigns</div>
            <Divider />
            <List className={classes.root}>
                <Game />
                <Game />
                <Game />
                <Fab size="small" color="primary" aria-label="Add" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </List>
        </Paper>
    );
}

export default withStyles(styles)(gamePanel);