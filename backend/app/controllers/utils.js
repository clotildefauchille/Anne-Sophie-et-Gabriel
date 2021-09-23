const axios = require('axios').default;
const Answer = require('../models/answer.js');
const Permission = require('../models/permission.js');

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
    },
    json: true,
  };
  const responseToken = await axios(getTokenOptions);
  return responseToken.data.access_token;
};

const createAuth0Users = async (guests, token) => {
  const dataGoogleSheetUsers = JSON.stringify(
    guests.map((guest) => {
      return {
        email: guest.email,
        given_name: guest.firstname,
        name: `${guest.firstname} ${guest.lastname}`,
        family_name: guest.lastname,
        password_hash: guest.password,
        user_metadata: guest.metadata,
      };
    }),
  );
  // console.log('=================>>>>>>>>>>>>>>>><dataGoogleSheetUsers', dataGoogleSheetUsers)
  //bulk import dans auth0
  //resquest POST multipart/formData; permet d'envoyer des fichiers en plus de données; le boundary sert de séparateur son format et sa valeur sont laissés à la discrétion du navigateur.
  const createUserOptions = {
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
};

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
        last_login: '',
      };
    }),
  );
  return await Answer.bulkCreate(answers, {ignoreDuplicates: true });
};

module.exports = {
  createAuth0Users,
  getAccessToken,
  createAnswers
};
