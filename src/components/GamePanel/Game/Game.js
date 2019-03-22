import React, {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MapIcon from '@material-ui/icons/Map';

class Game extends Component {
    render() {
        return (
            <ListItem>
                    <Avatar>
                    <MapIcon />
                    </Avatar>
                    <ListItemText primary='Game Title' secondary='Players' />
            </ListItem>
        );
    }
} 

export default Game; 