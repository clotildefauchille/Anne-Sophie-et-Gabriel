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
  createNewUser: async (req, res) => {
    // console.log("req.body", req.body);
    const guests = req.body;
    const permissions = guests[0].permissions.toString();

    console.log('--------------->guests', guests);
    const responseToken = await axios(getTokenOptions);
    const token = responseToken.data.access_token;
    // const guestCreated = Promise.all(
    //   guests.map(async (guest) => {
    //requete pour obtenir le token d'acces à l'api auth0 Management
    const connexionId = 'con_OndwDZt8rFe7WAlW';
    // const json = {
    //   type: 'object',
    //   properties: {
    //     email: {
    //       type: 'clotildefauchille@gmail.com',
    //       description: "The user's email address.",
    //       format: 'email',
    //     },
    //     email_verified: {
    //       type: 'false',
    //       default: false,
    //       description:
    //         'Indicates whether the user has verified their email address.',
    //     },
    //     user_id: {
    //       type: 'google-oauth2|101666571097616652218',
    //       description:
    //         "The user's unique identifier. This will be prepended by the connection strategy.",
    //     },
    //     username: {
    //       type: 'fauchille',
    //       description: "The user's username.",
    //     },
    //     given_name: {
    //       type: 'clotilde',
    //       description: "The user's given name.",
    //     },
    //     family_name: {
    //       type: 'fauchille',
    //       description: "The user's family name.",
    //     },
    //     name: {
    //       type: 'fauchille',
    //       description: "The user's full name.",
    //     },
    //     nickname: {
    //       type: 'clo',
    //       description: "The user's nickname.",
    //     },
    //     picture: {
    //       type: 'string',
    //       description: "URL pointing to the user's profile picture.",
    //     },
    //     blocked: {
    //       type: 'false',
    //       description: 'Indicates whether the user has been blocked.',
    //     },
    //     password_hash: {
    //       type: '$2a$10$aHF7mbpWT6tZ7PJVtwtjNelaKbszikcYBCB2jibvbFcGFmOsu/s4K',
    //       description:
    //         'Hashed password for the user. Passwords should be hashed using bcrypt $2a$ or $2b$ and have 10 saltRounds.',
    //     },
    //     custom_password_hash: {
    //       type: 'object',
    //       description:
    //         'A more generic way to provide the users password hash. This can be used in lieu of the password_hash field when the users password hash was created with an alternate algorithm. Note that this field and password_hash are mutually exclusive.',
    //       properties: {
    //         algorithm: 'bcrypt',
    //         hash: {
    //           type: 'object',
    //           properties: {
    //             value:
    //               '$2a$10$aHF7mbpWT6tZ7PJVtwtjNelaKbszikcYBCB2jibvbFcGFmOsu / s4K',
    //             encoding: 'utf8',
    //             key: {
    //               type: 'object',
    //               description:
    //                 'The key that was used to generate the HMAC hash',
    //               required: ['value'],
    //               properties: {
    //                 value: {
    //                   type: 'string',
    //                   description: 'The key value',
    //                 },
    //                 encoding: {
    //                   type: 'string',
    //                   enum: ['base64', 'hex', 'utf8'],
    //                   default: 'utf8',
    //                   description: 'The key encoding',
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         salt: {
    //           type: 'object',
    //           properties: {
    //             value: {
    //               type: 'string',
    //               description: 'The salt value used to generate the hash.',
    //             },
    //             encoding: {
    //               type: 'string',
    //               enum: ['base64', 'hex', 'utf8'],
    //               default: 'utf8',
    //               description:
    //                 'The encoding of the provided salt. Note that both upper and lower case hex variants are supported, as well as url-encoded base64.',
    //             },
    //             position: {
    //               type: 'string',
    //               enum: ['prefix', 'suffix'],
    //               description:
    //                 "The position of the salt when the hash was calculated. For example; MD5('salt' + 'password') = '67A1E09BB1F83F5007DC119C14D663AA' would have \"position\":\"prefix\".",
    //             },
    //           },
    //           required: ['value', 'position'],
    //         },
    //         password: {
    //           type: 'object',
    //           properties: {
    //             encoding: {
    //               type: 'string',
    //               enum: [
    //                 'ascii',
    //                 'utf8',
    //                 'utf16le',
    //                 'ucs2',
    //                 'latin1',
    //                 'binary',
    //               ],
    //               default: 'utf8',
    //               description:
    //                 'The encoding of the password used to generate the hash. On login, the user-provided password will be transcoded from utf8 before being checked against the provided hash. For example; if your hash was generated from a ucs2 encoded string, then you would supply "encoding":"ucs2".',
    //             },
    //           },
    //         },
    //       },
    //       required: ['algorithm', 'hash'],
    //       additionalProperties: false,
    //     },
    //     app_metadata: {
    //       type: 'object',
    //       description:
    //         "Data related to the user that does affect the application's core functionality.",
    //     },
    //     user_metadata: {
    //       type: 'object',
    //       description:
    //         "Data related to the user that does not affect the application's core functionality.",
    //     },
    //     mfa_factors: {
    //       type: 'array',
    //       items: {
    //         type: 'object',
    //         properties: {
    //           totp: {
    //             type: 'object',
    //             properties: {
    //               secret: {
    //                 type: 'string',
    //                 pattern: '^[A-Z2-7]+$',
    //                 description:
    //                   'The OTP secret is used with authenticator apps (Google Authenticator, Microsoft Authenticator, Authy, 1Password, LastPass). It must be supplied in un-padded Base32 encoding, such as: JBTWY3DPEHPK3PNP',
    //               },
    //             },
    //             additionalProperties: false,
    //             required: ['secret'],
    //           },
    //           phone: {
    //             type: 'object',
    //             properties: {
    //               value: {
    //                 type: 'string',
    //                 pattern: '^\\+[0-9]{1,15}$',
    //                 description:
    //                   'The phone number for SMS MFA. The phone number should include a country code and begin with +, such as: +12125550001',
    //               },
    //             },
    //             additionalProperties: false,
    //             required: ['value'],
    //           },
    //           email: {
    //             type: 'object',
    //             properties: {
    //               value: {
    //                 type: 'string',
    //                 format: 'email',
    //                 description: 'The email address for MFA',
    //               },
    //             },
    //             additionalProperties: false,
    //             required: ['value'],
    //           },
    //         },
    //         maxProperties: 1,
    //         additionalProperties: false,
    //       },
    //       minItems: 1,
    //       maxItems: 10,
    //     },
    //   },
    //   required: ['email'],
    //   additionalProperties: false,
    // };

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
        // position: guests[0].position,
        // password: guests[0].password,
        password: 'Loise2015#',
        connection: 'Username-Password-Authentication',
      },
      // `-----011000010111000001101001\r\nContent-Disposition: form-data; name=${json}; filename="USERS_IMPORT_FILE.json"\r\nContent-Type: text/json\r\n\r\n\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=${connexionId}\r\n\r\nCONNECTION_ID\r\n-----011000010111000001101001\r\nContent-Disposition: form-data;`,
    };
    try {
      //creation d'un range dans BDD wedding.sql

      const ranges = req.body;
      console.log('ranges', ranges);
      
      ranges.map((oneRange) => {
        console.log('rangeUseful', oneRange.range, oneRange.email);
        Answer.update({ google_sheet_range: oneRange.range },
        {
          where: {
            email: oneRange.email,
          },
        },
          );
       });
     

      try {
        //creation d'un user dans la BDD de Auth0Provider

        const responseCreatedUser = await axios(createUserOptions);
        //   console.log('before sleep');
        // await sleep(2000);

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
  createRangeUser: async (req, res) => {
    try {
      res.send('hello');
    } catch (err) {
      console.error(err);
    }
  },
};
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
module.exports = newUserController;
