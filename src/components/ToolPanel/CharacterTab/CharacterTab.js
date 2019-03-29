import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1, 
      justifyContent: 'stretch',
    },
    sheet: {
      padding: theme.spacing.unit * 2,
      color: theme.palette.text.secondary,
    },
    list: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
});

const characterTab = (props) => {
    const { classes } = props;
    return (

          <Grid container alignItems="stretch" spacing={0} className={classes.root}>
            <Grid item xs={2}>
              <Paper className={classes.list}>List</Paper>
            </Grid>
            <Grid item xs={10}>
              <Paper className={classes.sheet}>Sheet</Paper>
            </Grid>
          </Grid>

    );
}

export default withStyles(styles)(characterTab);