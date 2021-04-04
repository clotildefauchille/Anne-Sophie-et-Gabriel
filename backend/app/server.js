const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
var cors = require('cors');



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

app.get("/permissions", jwtCheck, (req, res) => {
  res.send({permissions: req.user.permissions})
})

// app.use(jwtCheck);


// app.get("/v2/users", (req, res) => {
//     try {
//       console.log("user", user)
//       // const permissions = req.user.permissions;
//       // res.send(permissions);
//     } catch (error) {
//       console.log(error);
//       res.statusCode = 500;
//       res.send({ error });
//     }
//   }
// );


  app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

  const start = () => {
    app.listen(PORT, () => {
        console.log('Running on localhost :' + PORT);
    });
};

module.exports = { start };