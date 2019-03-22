import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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
  });

const gamePanel = (props) => {
    const { classes } = props;
    return (
        <Paper className={classes.paper}>
            <div>Current Campaigns</div>
            <List className={classes.root}>
                <Game />
                <Fab size="small" color="primary" aria-label="Add" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </List>
        </Paper>
    );
}

export default withStyles(styles)(gamePanel);