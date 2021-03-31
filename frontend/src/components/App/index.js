// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import
import Wait from 'src/components/Wait';
import Agenda from 'src/components/Agenda';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

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
    </Switch>
    <Footer />
    
  </div>
);

// == Export
export default App;
