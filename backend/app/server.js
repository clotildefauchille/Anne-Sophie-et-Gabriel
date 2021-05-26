const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
var cors = require('cors');
const newGuestAnswerController = require('./controllers/newGuestAnswerController');
const practicalInfosController = require('./controllers/practicalInfosController');
const newUserController = require('./controllers/newUserController');
const eventsController = require('./controllers/eventsController');
const loginController = require('./controllers/loginController');

var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var request = require('request');

const { auth } = require('express-openid-connect');

app.use(cors());
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

app.get('/api/v2/users/:id', newUserController.getUserInfos);

app.get('/api/infos', practicalInfosController.getPracticalInfos);

// app.use(jwtCheck);

app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

app.post('/api/userAnswer', newGuestAnswerController.newGuestAnswer);

app.get('/api/guestAnswer/:email', newGuestAnswerController.getGuestAnswer);

//to send to google api sheet
app.get('/api/allUserAnswer', newGuestAnswerController.getAllGuestAnswer);

app.get('/api/permission/:email', newGuestAnswerController.getGuestPermissionByEmail);

app.post('/api/users', newUserController.createNewUser);

app.get('/api/events', eventsController.getEventsInfos);

app.get('/api/login', loginController.getLoginInfo);

const start = () => {
  app.listen(PORT, () => {
    console.log('Running on localhost :' + PORT);
  });
};

module.exports = { start };
