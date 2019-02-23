import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import styles from './Layout.module.css';

class Layout extends Component {
    render () {
        return (
            <div className={styles.Layout}>
                <h1>Logo : Nav : Hamberger</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;