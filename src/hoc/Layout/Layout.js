import React, { Component } from 'react';

import styles from './Layout.module.css';
import MenuAppBar from '../../components/UI/MenuToolBar/MenuAppBar';

class Layout extends Component {
    render () {
        return (
            <div className={styles.Layout}>
                <MenuAppBar />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;