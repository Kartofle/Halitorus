import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = {
    wound: {
        padding: '3px',
    }
}

const wound = (props) => {
    const { classes } = props
    return (
        <Checkbox 
            className={classes.wound}
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />}  
        />
    );
}

export default withStyles(styles)(wound);