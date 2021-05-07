const sequelize = require('../database.js');
var request = require('request');
const Answer = require('../models/answer.js');

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
  bulkImportUser: async (req, res) =>{
    const responseToken = await axios(getTokenOptions);
    const token = responseToken.data.access_token;
    const data = [{ "email": "clo1@gmail.com" }, { "email": "clo2@gmail.com" }, { "email": "clo3@gmail.com" }, { "email": "clo4@gmail.com" }, { "email": "clo5@gmail.com" }, { "email": "clo6@gmail.com" }]
    
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
      data: `--AaB03x\r\nContent-Disposition: form-data; name="connection_id"\r\n\r\ncon_armfGjb5J3GJCj5G\r\n--AaB03x\r\nContent-Disposition: form-data; name="external_id"\r\n\r\ncloclo\r\n--AaB03x\r\nContent-Disposition: form-data; name="users"; filename="googleUsers.json"\r\nContent-Type: text/plain\r\n\r\n{"email":"clo@gmail.com"}\r\n--AaB03x--`
    };
      

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

  },
  createNewUser: async (req, res) => {
    // console.log("req.body", req.body);
    const guests = req.body;
    const permissions = guests[0].permissions.toString();

    console.log('--------------->guests', guests);
    const responseToken = await axios(getTokenOptions);
    const token = responseToken.data.access_token;
   
    
    var createUserOptions = {
      method: 'POST',
      url: 'https://dev-ljslmul5.eu.auth0.com/api/v2/users',
      // url: 'https://dev-ljslmul5.eu.auth0.com/api/v2/jobs/users-imports',
      headers: {
        authorization: `Bearer ${token}`,
      },
      json: true,
      data: {
        name: `${guests[0].firstname.toString()} ${guests[0].lastname.toString()}`,
        email: guests[0].email.toString(),
        given_name: guests[0].firstname.toString(),
        family_name: guests[0].lastname.toString(),
        password: 'Loise2015#',
        connection: 'Username-Password-Authentication',
      },
    };
    try {
      
      //creation d'un range dans BDD wedding.sql
      const ranges = req.body;
      console.log('ranges', ranges);

      ranges.map((oneRange) => {
        console.log('rangeUseful', oneRange.range, oneRange.email);
        Answer.create(
          { google_sheet_range: oneRange.range,
            sub: '',
            firstname: '',
            lastname: '',
            present: false,
            accompanied: false,
            firstname_partner: '',
            children_number: 0,
            allergy: '',
            email: oneRange.email, },
        );
      });

      try {
        //creation d'un user dans la BDD de Auth0Provider

        const responseCreatedUser = await axios(createUserOptions);
        
        //creation de la permission pour le user créée
       const userId = responseCreatedUser.data.user_id;
        console.log('responsecreated user', responseCreatedUser.data.user_id);
        var createPermissionsUserOptions = {
          method: 'POST',
          url: `https://dev-ljslmul5.eu.auth0.com/api/v2/users/${userId}/permissions`,
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`,
            'cache-control': 'no-cache',
          },
          data: {
            permissions: [
              {
                resource_server_identifier: 'https://api.annesophiegabriel.fr',
                permission_name: `${permissions}`,
              },
            ],
          },
        };
        try {
          const givePermissionsUser = axios.request(
            createPermissionsUserOptions,
          );
          console.log('givePermissionsUser', givePermissionsUser);
        } catch (err) {
          console.log(
            'err',
            err.response.data.statusCode,
            err.response.data.message,
            err.response.statusText,
          );
        }
      } catch (err) {
        console.log(
          'err',
          err.response.data.statusCode,
          err.response.data.message,
          err.response.statusText,
        );
      }
    } catch (err) {
      console.log('err');
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
    // }),
    // );
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