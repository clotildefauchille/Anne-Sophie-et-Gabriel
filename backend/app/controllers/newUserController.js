const sequelize = require('../database.js');
var request = require('request');
const axios = require('axios').default;
var getTokenOptions = {
  method: 'POST',
  url: 'https://dev-ljslmul5.eu.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  data: {
    client_id: 'RfIYAohidWmz0w1yL4MCig3UmGgw8ltR',
    client_secret:
      'o9fBfZH6H67Ywhyeqiev_cLNQGiG7jf_FzgsLMyegNcVtv1jyC74l8onZd2vd-5a',
    audience: 'https://dev-ljslmul5.eu.auth0.com/api/v2/',
    grant_type: 'client_credentials',
    // scope: 'create:users',
  },
  json: true,
};
const newUserController = {
  createNewUser: async (req, res) => {
    // console.log("req.body", req.body);
    const guests = req.body;
    const responseToken = await axios(getTokenOptions);
    const token = responseToken.data.access_token;
    const guestCreated = Promise.all(
      guests.map(async (guest) => {
        //requete pour obtenir le token d'acces à l'api auth0 Management

        var createUserOptions = {
          method: 'POST',
          url: 'https://dev-ljslmul5.eu.auth0.com/api/v2/users',
          headers: {
            authorization: `Bearer ${token}`,
          },
          json: true,
          data: {
            email: guest.toString(),
            password: 'marriageA&G',
            connection: 'Username-Password-Authentication',
          },
        };
        try {
          const responseCreatedUser = await axios(createUserOptions);
          //   console.log('before sleep');
          await sleep(2000);
          console.log('responsecreated user', responseCreatedUser.data.user_id);
        } catch (err) {
            console.log('err', err.response.status, err.response.statusText);
        }
        //   request(options, function (error, response, body) {
        //     if (error) throw new Error(error);
        //     console.log('body', body);
        //     console.log('body.user_id', body.user_id);
        //     if (body.statusCode === 409) {
        //       console.log('already exist');
        //       var options = {
        //         method: 'PATCH',
        //         url: `https://dev-ljslmul5.eu.auth0.com/PATCH/api/v2/users/${body.user_id}`,
        //         headers: {
        //           authorization: `Bearer ${body.access_token}`,
        //         },
        //         json: true,
        //         body: {
        //           email: guest.toString(),
        //           password: 'marriageA&G',
        //           connection: 'Username-Password-Authentication',
        //         },
        //       };
        //       request(options, function (error, response, body) {
        //         if (error) throw new Error(error);
        //         console.log('body updated', body);
        //       });
        //     }
        //   });

        // } else {console.log('guest dejà existant')}
      }),
    );
    res.send('hello clotte');
  },
};
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
module.exports = newUserController;
