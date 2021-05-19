// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import Agenda from 'src/containers/Agenda';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Rsvp from 'src/containers/Rsvp';
import Map from 'src/containers/Map';
import Questions from 'src/components/Questions';
import Gift from 'src/components/Gift';
import Menu from 'src/components/Menu';

import './styles.css';
import LogoutModal from 'src/containers/LogoutModal';
import {
  isMobile,
} from 'react-device-detect';

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
    {isMobile
      ? <Menu />
      : <Footer />
    }
    <LogoutModal />
  </div>
);

// == Export
export default App;
