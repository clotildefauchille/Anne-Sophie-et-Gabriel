const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
var cors = require('cors');
const newGuestAnswerController = require('./controllers/newGuestAnswerController');
const practicalInfosController = require('./controllers/practicalInfosController');
const newUserController = require('./controllers/newUserController');
const eventsController = require('./controllers/eventsController');
const googleAppScriptController = require('./controllers/googleAppScriptController');

var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var request = require('request');

const { auth } = require('express-openid-connect');

app.use(cors({
  origin: process.env.FRONTEND_URL,
}));
// to get acces token for Auth0 Management API

/**
 * jwtCheck:
 *  - decrpyt Incomming JWT token in the request (e.g. in Authorization: Bearer <jwt_token>)
 *  - adds user info to request object (e.g. in request.user)
 */
var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-ljslmul5.eu.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://api.annesophiegabriel.fr',
  issuer: 'https://dev-ljslmul5.eu.auth0.com/',
  algorithms: ['RS256'],
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/userId', jwtCheck, (req, res) => {
  res.send({
    userId: req.user.sub,
  });
});



app.get('/api/infos', jwtCheck, practicalInfosController.getPracticalInfos);

app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

//route qui update la reponse de l'utilisateur qu'il envoi via la page RSVP
app.post('/api/userAnswer', jwtCheck, newGuestAnswerController.updateGuestAnswer);
//route qui récupère les données précedement envoyées de la réponse utilisateur
app.get('/api/guestAnswer/:email', jwtCheck, newGuestAnswerController.getGuestAnswer);
//route qui récupère le last_login de l'utilisateur
app.get('/api/v2/users/:id', jwtCheck, newUserController.getUserInfos);

//to send to google api sheet
app.get('/api/allUserAnswer', newGuestAnswerController.getAllGuestAnswer);

app.get('/api/permission/:email', jwtCheck, newGuestAnswerController.getGuestPermissionByEmail);

//from google api sheet
app.post('/api/users', newUserController.createNewUser);

app.get('/api/events', jwtCheck, eventsController.getEventsInfos);

app.post('/api/authenticate', googleAppScriptController.googleAppScriptAuthentication);

const start = () => {
  app.listen(PORT, () => {
    console.log('Running on localhost :' + PORT);
  });
};

module.exports = { start };
