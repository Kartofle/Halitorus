import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import GamePanel from '../../components/GamePanel/GamePanel';
import ToolPanel from '../../components/ToolPanel/ToolPanel';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    display: {
      height: '-webkit-fill-available',
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
                <Grid item xs={2}>
                  <GamePanel />
                </Grid>
                <Grid item xs={10}>
                  <ToolPanel />
                </Grid>
              </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(UserProfile);