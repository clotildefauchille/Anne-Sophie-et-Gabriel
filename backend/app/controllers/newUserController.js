const sequelize = require('../database.js');
var request = require('request');
const Answer = require('../models/answer.js');
const Permission = require('../models/permission.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const axios = require('axios').default;

const getAccessToken = async () => {
  const getTokenOptions = {
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
  const responseToken = await axios(getTokenOptions);
  return responseToken.data.access_token;
}

// Pour pouvoir map il faut utiliser Promise.All
// ..qui attend que toutes les promesses s'exécutent 
// ..avt de return l'array
const hashGuestsPasswords = async (guests, token) => await Promise.all(
  guests.map(async (guest) => ({
    ...guest,
    password: await bcrypt.hash(guest.password, saltRounds),
  })),
);

const createAuth0Users = async (guests, token) => {
  const dataGoogleSheetUsers = JSON.stringify(
    guests.map((guest) => {
      return {
        email: guest.email,
        given_name: guest.firstname,
        name: `${guest.firstname} ${guest.lastname}`,
        family_name: guest.lastname,
        password_hash: guest.password,
      };
    }),
  );
  // console.log('=================>>>>>>>>>>>>>>>><dataGoogleSheetUsers', dataGoogleSheetUsers)
  //bulk import dans auth0
  var createUserOptions = {
    method: 'POST',
    url: 'https://dev-ljslmul5.eu.auth0.com/api/v2/jobs/users-imports',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data; boundary=AaB03x',
    },
    json: true,
    data: `--AaB03x\r\nContent-Disposition: form-data; name="connection_id"\r\n\r\ncon_armfGjb5J3GJCj5G\r\n--AaB03x\r\nContent-Disposition: form-data; name="external_id"\r\n\r\ncloclo\r\n--AaB03x\r\nContent-Disposition: form-data; name="users"; filename="googleUsers.json"\r\nContent-Type: text/plain\r\n\r\n${dataGoogleSheetUsers}\r\n--AaB03x--`,
  };

  return await axios(createUserOptions);
}

const createAnswers = async (guests) => {
  const answers = await Promise.all(
    guests.map(async (guest) => {
      const permissions = await Permission.findAll({
        where: { type: guest.permissions },
      });
      return {
        google_sheet_range: guest.range,
        sub: '',
        firstname: '',
        lastname: '',
        present: false,
        accompanied: false,
        firstname_partner: '',
        children_number: 0,
        allergy: '',
        email: guest.email,
        permission_id: permissions.map(({ dataValues: { id } }) => id),
      };
    }),
  );
  return await Answer.bulkCreate(answers);
}

const newUserController = {
  createNewUser: async (req, res) => {
    let guests = req.body;
    const token = await getAccessToken();
    //on vire les guests sans email
    guests = guests.filter((elem) => elem.email != null);
    // console.log('============passwords', passwords);
    guests = await hashGuestsPasswords(guests);

    try {
      //creation d'un range et d'une permission dans la table answers dans la BDD wedding.sql
      // TODO ne pas ecrire de reponse lors de l'update des user auth0
      const answersCreated = await createAnswers(guests);
      try {
        //creation d'un user dans la BDD de Auth0Provider
        const authUserCreated = await createAuth0Users(guests, token);
      } catch (err) {
        console.log(
          'err creating user auth0',
          err.response.data.statusCode,
          err.response.data.message,
          err.response.statusText,
        );
      }
    } catch (e) {
      console.log('error on answer creation', e);
    }
    res.send('hello clotte');
  },
  getUserInfos: async (req, res) => {
    let userId = req.params.id;
    console.log('-------->userId', userId);
    const responseToken = await axios(getTokenOptions);
    const token = responseToken.data.access_token;

    var options = {
      method: 'GET',
      url: `https://dev-ljslmul5.eu.auth0.com/api/v2/users/${userId}`,
      // params: { q: 'email:"jane@exampleco.com"', search_engine: 'v3' },
      headers: { authorization: `Bearer ${token}` },
    };

    axios
      .request(options)
      .then(function (response) {
        res.send({
          lastname: response.data.family_name,
          firstname: response.data.given_name,
          email: response.data.email,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};

module.exports = newUserController;
