const sequelize = require('../database.js');
var request = require('request');
const Answer = require('../models/answer.js');
const Permission = require('../models/permission.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
  bulkImportUser: async (req, res) => {
    const responseToken = await axios(getTokenOptions);
    const token = responseToken.data.access_token;
    const data = [
      { email: 'clo1@gmail.com' },
      { email: 'clo2@gmail.com' },
      { email: 'clo3@gmail.com' },
      { email: 'clo4@gmail.com' },
      { email: 'clo5@gmail.com' },
      { email: 'clo6@gmail.com' },
    ];

    // requêtes POST multipart/form-data pour la creation d'utilisateur sans limitation de requete d'auth0;
    //multipart/form-data est un type de requête HTTP qui permet d'envoyer un fichier en plus des données.
    //boundary est un separateur; https://mathieu-lemoine.developpez.com/articles/web/browsers/?page=construction_requete

    var options = {
      method: 'POST',
      url: 'https://dev-ljslmul5.eu.auth0.com/api/v2/jobs/users-imports',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data; boundary=AaB03x',
      },
      data: `--AaB03x\r\nContent-Disposition: form-data; name="connection_id"\r\n\r\ncon_armfGjb5J3GJCj5G\r\n--AaB03x\r\nContent-Disposition: form-data; name="external_id"\r\n\r\ncloclo\r\n--AaB03x\r\nContent-Disposition: form-data; name="users"; filename="googleUsers.json"\r\nContent-Type: text/plain\r\n\r\n[{"email":"clo@gmail.com"}]\r\n--AaB03x--`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  createNewUser: async (req, res) => {
    // console.log("req.body", req.body);
    let guests = req.body;
    // const permissions = guests[0].permissions.toString();

    // console.log('--------------->guests', guests);
    const responseToken = await axios(getTokenOptions);
    const token = responseToken.data.access_token;
    //on vire les guests avec email undefined
    guests = guests.filter((elem) => elem.email != null);

    // console.log('============passwords', passwords);
    // Pour pouvoir map il faut utiliser Promise.All qui attend que toutes les promesses s'exécutent avt de return l'array
    guests = await Promise.all(
      guests.map(async (guest) => {
        return {
          ...guest,
          password: await bcrypt.hash(guest.password, saltRounds),
        };
      }),
    );

    console.log('============guests.length', guests.length);

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

    try {
      //creation d'un range et d'une permission dans la table answers dans la BDD wedding.sql
      // TODO ne pas ecrire de reponse lors de l'update des user auth0
      const guests = req.body;
      // const answerCreated = await Promise.all(
      //   guests.map(async (guest) => {
      //     const userPermission = await Permission.findAll({
      //       where: { type: guest.permissions },
      //     });
      //     if (userPermission) {
      //       await Answer.bulkCreate([
      //         {
      //           google_sheet_range: guest.range,
      //           sub: '',
      //           firstname: '',
      //           lastname: '',
      //           present: false,
      //           accompanied: false,
      //           firstname_partner: '',
      //           children_number: 0,
      //           allergy: '',
      //           email: guest.email,
      //           permission_id: userPermission.dataValues.id,
      //         },
      //       ]);
      //     }
      //   }),
      // );
      const answerCreated = guests.map((guest) => {
        Permission.findAll({
          where: { type: guest.permissions },
        }).then((usersPermission) =>
          Answer.bulkCreate([
            {
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
              permission_id: usersPermission.map((userPermission) => {
                return userPermission.dataValues.id;
              }),
            },
          ]),
        );
      });
      console.log('answerCreated', answerCreated);
      try {
        //creation d'un user dans la BDD de Auth0Provider

        const responseCreatedUser = await axios(createUserOptions);
        console.log('responsecreated user', responseCreatedUser.data);

      } catch (err) {
        console.log(
          'err creating user auth0',
          err.response.data.statusCode,
          err.response.data.message,
          err.response.statusText,
        );
      }
    } catch (e) {
      console.log('error on range creation', e);
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

// function sleep(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }
