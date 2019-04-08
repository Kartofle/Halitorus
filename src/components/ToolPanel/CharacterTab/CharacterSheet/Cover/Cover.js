import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
    cover: {
      margin: theme.spacing.unit * .5,
      width: 100,
    },
    barrier: {
        margin: theme.spacing.unit * .5,
        width: 210,
      },
  });

const cover = (props) => {
    const { classes } = props
    return (
        <div>
            <TextField
                id="cover"
                className={classes.cover}
                variant="outlined"
                label="Cover"
                InputProps={{
                    startAdornment: <InputAdornment position="end">%</InputAdornment>,
                }}

            />
            <TextField
                id="barrier"
                className={classes.barrier}
                variant="outlined"
                label="Barrier"
                placeholder="HR                   /"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    );
}

export default withStyles(styles)(cover);