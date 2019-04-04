import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import MenuAppBar from '../../components/UI/MenuToolBar/MenuAppBar';

const styles = theme => ({
    layout: {
        textAlign: 'center',
        width: '100%',
        height: '100%',
    },
    content: {
        width: '100%',
        height: '100%',
    },
});

class Layout extends Component {
    render () {
        const { classes } = this.props
        return (
            <div className={classes.layout}>
                <MenuAppBar />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(Layout);