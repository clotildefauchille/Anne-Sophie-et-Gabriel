// == Import npm
import React from 'react';

// == Import
import Wait from 'src/components/Wait';
import Footer from 'src/components/Footer';

import './styles.css';

// == Composant∏
const App = () => (
  <div className="app">
    <Wait />
    <Footer />
  </div>
);

// == Export
export default App;