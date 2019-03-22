import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import GamePanel from '../../components/GamePanel/GamePanel';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    display: {
      height: '500px',
    },
    paper: {
      height: '100%',
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
});

class UserProfile extends Component {
    render () {  
        const { classes } = this.props;

        return (
            <div className={classes.root}>
            <Grid container alignItems="stretch" spacing={0} className={classes.display}>
              <Grid item xs={3}>
                <GamePanel />
              </Grid>
              <Grid item xs={9}>
                <Paper className={classes.paper}>Tabs</Paper>
              </Grid>
            </Grid>
          </div>
        );
    }
}

export default withStyles(styles)(UserProfile);