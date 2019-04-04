import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import Game from './Game/Game';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    margin: {
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
            <div className={classes.title}>Current Campaigns</div>
            <Divider />
            <List className={classes.root}>
                <Game />
                <Game />
                <Game />
                <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                    New Game
                </Button>
            </List>
        </Paper>
    );
}

export default withStyles(styles)(gamePanel);