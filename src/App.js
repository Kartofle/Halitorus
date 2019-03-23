import React, { Component } from 'react';
import { Route, Switch } from  'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import UserProfile from './containers/UserProfile/UserProfile';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>  
          <Route path="/user_profile" component={UserProfile} />
          <Route path="/" exact component={Auth} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
