import React, {Component, Fragment} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MapIcon from '@material-ui/icons/Map';

class Game extends Component {
    state = {
        game: {
            title: "Campaign Title",
            host: "Test",
            players: [],
        }
    }

    render() {
        return (
            <Fragment>
                <ListItem divider={true} button={true}>
                        <Avatar>
                        <MapIcon />
                        </Avatar>
                        <ListItemText 
                            primary={this.state.game.title} 
                            secondary={"Players:" + this.state.game.players} />
                </ListItem>
            </Fragment>
        );
    }
} 

export default Game; 