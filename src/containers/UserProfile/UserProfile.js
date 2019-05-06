import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from '../../axios-games';

import GamePanel from '../../components/GamePanel/GamePanel';
import ToolPanel from '../../components/ToolPanel/ToolPanel';
import Spinner from '../../components//UI/Spinner/Spinner';

const styles = theme => ({
    root: {
      height: '-webkit-fill-avialable',
      flexGrow: 1,
      display: 'flex',
    },
    tools: {
      flex: 4,
      color: theme.palette.text.secondary,
    },
    list: {
      flex: 1,
      color: theme.palette.text.secondary,
    },
});

class UserProfile extends Component {
  state = {
    games: [],
    auth: true,
    error: false,
  }

  componentDidMount () {
    axios.get('https://halitorus.firebaseio.com/games.json')
      .then(response => {
          this.setState( { games: response.data } );
      })
      .catch(error => {
          console.log(error);
      });
  }

  render () {
    const { classes } = this.props;

    let view = this.state.error ? <p>Games could not be loaded.</p> : <Spinner />


    if (this.state.games) {
      view = (
        <Fragment>
          <GamePanel 
            className={classes.list}
            newGame={this.newGameHandler}/>
          <ToolPanel 
            className={classes.tools} />
        </Fragment>
      );
    }

    return (
      <div className={classes.root}>
        {view}
      </div>
    );
  }
}

export default withStyles(styles)(UserProfile);