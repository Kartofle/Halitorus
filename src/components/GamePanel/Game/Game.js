import React, {Component, Fragment} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
                        <ListItemText 
                            primary={this.state.game.title} 
                            secondary={"GM:" + this.state.game.host} />
                </ListItem>
            </Fragment>
        );
    }
} 

export default Game; 