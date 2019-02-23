import React, { Component } from 'react';
import { Route } from  'react-router-dom';

import Layout from './hoc/Layout/Layout';
import CreateGame from './containers/CreateGame/CreateGame';
import FindGame from './containers/FindGame/FindGame';
import InGame from './containers/InGame/InGame';
import UserProfile from './containers/UserProfile/UserProfile';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/user_profile" component={UserProfile} />
          <Route path="/find_game" component={FindGame} />
          <Route path="/create_game" component={CreateGame} />
          <Route path="/in_game" component={InGame} />
        </Layout>
      </div>
    );
  }
}

export default App;
