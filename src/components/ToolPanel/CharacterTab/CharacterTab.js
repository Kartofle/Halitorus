import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import CharacterList from './CharacterList/CharacterList';
import CharacterSheet from './CharacterSheet/CharacterSheet';
 
const styles = theme => ({
    root: {
      flexGrow: 1,
      display: 'flex',
    },
    sheet: {
      width: '20%',
      color: theme.palette.text.secondary,
    },
    list: {
      width: '80%',
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
});

class characterTab extends Component {
  render () {
    const { classes } = this.props;
    return (
        <Paper className={classes.root}>
          <CharacterList className={classes.list}/>
          <CharacterSheet className={classes.sheet}/>
        </Paper>
    );
  }
}

export default withStyles(styles)(characterTab);