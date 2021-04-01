const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();


const { auth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'anXb40fi1XwQ3mSZzZQ1U6ocJrhROdlA',
    issuerBaseURL: 'https://dev-ljslmul5.eu.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});




const start = () => {
    app.listen(PORT, () => {
        console.log('Running on localhost :' + PORT);
    });
};

module.exports = { start };