import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Currency from "./Currency/Currency";

const styles = theme => ({
    textField: {
        width: 50,
    },
    textBlock: {
        width: 215,
        marginLeft: theme.spacing.unit * .5,
    },
    rowBlock: {
        margin: '15px 0 0 0',
        justifyContent: 'center',
        display: 'flex',
    },
    columnBlock: {
        justifyContent: 'center',
        display: 'flex-column',
    },
    label: {
        margin: '4px',
    }
});

const charWealth = (props) => {
    const { classes } = props;
    return (
        <div className={classes.rowBlock}>
            <div className={classes.columnBlock}>
                <Currency />
                <Currency />
                <Currency />
            </div>
            <TextField
                id="land"
                label="Land"
                multiline
                rows="7"
                defaultValue=" "
                className={classes.textBlock}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="Unique"
                label="Unique"
                multiline
                rows="7"
                defaultValue=" "
                className={classes.textBlock}
                margin="dense"
                variant="outlined"
            />
        </div>
    );
}

export default withStyles(styles)(charWealth);