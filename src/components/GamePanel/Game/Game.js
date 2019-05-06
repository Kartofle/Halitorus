import React, { Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const game = (props) => {

    return (
        <Fragment>
            <ListItem divider={true} button={true}>    
                    <ListItemText 
                        primary={props.props.title} 
                        secondary={"GM:" + props.games.gm} />
            </ListItem>
        </Fragment>
    );
} 

export default game; 