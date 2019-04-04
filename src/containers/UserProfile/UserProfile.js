import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import GamePanel from '../../components/GamePanel/GamePanel';
import ToolPanel from '../../components/ToolPanel/ToolPanel';

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
    render () {  
        const { classes } = this.props;
        return (
            <div className={classes.root}>
              <GamePanel className={classes.list}/>
              <ToolPanel className={classes.tools}/>
            </div>
        );
    }
}

export default withStyles(styles)(UserProfile);