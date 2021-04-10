const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
var cors = require('cors');
const newGuestAnswerController = require("./controllers/newGuestAnswerController");
const practicalInfosController = require("./controllers/practicalInfosController");

var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

const { auth } = require('express-openid-connect');

app.use(
  cors()
);

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
    jwksUri: 'https://dev-ljslmul5.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://api.annesophiegabriel.fr',
  issuer: 'https://dev-ljslmul5.eu.auth0.com/',
  algorithms: ['RS256']
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/permissions", jwtCheck, (req, res) => {
  res.send({permissions: req.user.permissions, userId: req.user.sub})
});

app.get("/api/infos", practicalInfosController.getPracticalInfos)

// app.use(jwtCheck);


app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

app.post('/api/userAnswer', newGuestAnswerController.newGuestAnswer);

  const start = () => {
    app.listen(PORT, () => {
        console.log('Running on localhost :' + PORT);
    });
};

module.exports = { start };