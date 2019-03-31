import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CharacterList from './CharacterList/CharacterList';
import CharacterSheet from './CharacterSheet/CharacterSheet';

const styles = theme => ({
    root: {
      flexGrow: 1, 
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

class characterTab extends Component {
  render () {
    const { classes } = this.props;
    return (
        <Paper>
          <Grid container spacing={0} className={classes.root}>
            <Grid item xs={2}>
              <CharacterList />
            </Grid>
            <Grid item xs={10}>
              <CharacterSheet />
            </Grid>
          </Grid>
        </Paper>
    );
  }
}

export default withStyles(styles)(characterTab);