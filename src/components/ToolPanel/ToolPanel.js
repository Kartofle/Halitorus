import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MapIcon from '@material-ui/icons/Map';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import BookIcon from '@material-ui/icons/Book';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class ToolPanel extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<PersonIcon />} />
          <Tab icon={<PeopleIcon />} />
          <Tab icon={<FavoriteIcon />} />
          <Tab icon={<MapIcon />} />
          <Tab icon={<BookIcon />} />
        </Tabs>
      </Paper>
    );
  }
}

ToolPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToolPanel);