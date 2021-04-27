// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import
import Wait from 'src/components/Wait';
import Agenda from 'src/containers/Agenda';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
// import LoginButton from 'src/components/LoginButton';
// import LogoutButton from 'src/components/LogoutButton';
// import Profile from 'src/components/Profile';
import Rsvp from 'src/containers/Rsvp';
import Map from 'src/containers/Map';
import Questions from 'src/components/Questions';
import Gift from 'src/components/Gift';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    {/* <Wait /> */}
    <Header />
    <Switch>
      <Route path="/" exact>
        <Agenda />
      </Route>
      <Route path="/confirmation" exact>
        <Rsvp />
      </Route>
      <Route path="/infos" exact>
        <Map />
      </Route>
      <Route path="/questions" exact>
        <Questions />
      </Route>
      <Route path="/cadeau" exact>
        <Gift />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
