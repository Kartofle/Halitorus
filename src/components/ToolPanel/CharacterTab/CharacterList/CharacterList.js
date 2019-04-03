import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    root: {
        height: '-webkit-fill-available',
        width: '100%',
        minWidth: '225px',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        height: '100%',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 2,
    },
    fab: {
        margin: theme.spacing.unit,
    },
});

class CharacterList extends React.Component {
  state = {
    openPCs: false,
    openNPCs: false,
  };

  handlePCsClick = () => {
    this.setState(state => ({ openPCs: !state.openPCs }));
  };

  handleNPCsClick = () => {
    this.setState(state => ({ openNPCs: !state.openNPCs }));
  };

  render() {
    const { classes } = this.props;

    return (
        <Paper>
            <List
                component="nav"
                className={classes.root}
            >
                <ListItem button onClick={this.handlePCsClick}>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText inset primary="Player's" />
                {this.state.openPCs ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={this.state.openPCs} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Fab size="small" color="primary" aria-label="Create" className={classes.fab}>
                        <AddIcon />
                    </Fab>
                    <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <Avatar alt="PC" src=""/>
                    </ListItemIcon>
                    <ListItemText inset primary="Character.name" />
                    </ListItem>
                </List>
                </Collapse>

                <ListItem button onClick={this.handleNPCsClick}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText inset primary="NPC's" />
                {this.state.openNPCs ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={this.state.openNPCs} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Fab size="small" color="primary" aria-label="Create" className={classes.fab}>
                        <AddIcon />
                    </Fab>
                    <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText inset primary="Starred" />
                    </ListItem>
                </List>
                </Collapse>
            </List>
        </Paper>   
    );
  }
}

CharacterList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterList);