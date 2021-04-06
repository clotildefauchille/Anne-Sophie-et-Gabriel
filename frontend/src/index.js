// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Connexion from 'src/components/Connexion';
import { Provider } from 'react-redux';
import store from 'src/store';

// == Import : local
// Composants
import App from 'src/components/App';
import Permissions from 'src/containers/permissions';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Auth0Provider
    domain="dev-ljslmul5.eu.auth0.com"
    clientId="2wL2jalDIk9OwQ3n6c5Pno4ZrAqLIXiC"
    redirectUri={window.location.origin}
    audience="https://api.annesophiegabriel.fr"
    scope="read:current_user update:current_user_metadata read:users "
    cacheLocation="localstorage"
  >
    <Provider store={store}>
      <Connexion>
        <Permissions>
          <Router>
            <App />
          </Router>
        </Permissions>
      </Connexion>
    </Provider>
  </Auth0Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
