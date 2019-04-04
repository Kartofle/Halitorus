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
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        width: '99%',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        width: '20%',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 2,
    },
    margin: {
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
        <Paper className={classes.paper}>
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
                    <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                        New PC
                    </Button>
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
                    <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                        New NPC
                    </Button>
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