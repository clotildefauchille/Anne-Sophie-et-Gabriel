// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import
import Wait from 'src/components/Wait';
import Agenda from 'src/components/Agenda';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import LoginButton from 'src/components/LoginButton';
import LogoutButton from 'src/components/LogoutButton';
import Profile from 'src/components/Profile';

import './styles.css';

// == Composant∏
const App = () => (
  <div className="app">
    {/* <Wait /> */}
    <Header />
    <Switch>
      <Route path="/" exact>
        <Agenda />
      </Route>
      <Route path="/confirmation" exact>
        <LoginButton />
        <LogoutButton />
        <Profile />
      </Route>
    </Switch>
    <Footer />
    
  </div>
);

// == Export
export default App;
