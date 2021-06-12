const axios = require('axios').default;
const bcrypt = require('bcrypt');

const {Admin} = require('../models');

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

const googleAppScriptController = {
  googleAppScriptAuthentication: async (req, res) => {
    const userName = req.body[0].googleAppScriptUsername;
    const password = req.body[0].googleAppScriptPassword;

    //solution 1 on utilise pas de password et l'admin est inséré dans la bdd
    const adminResult = await Admin.findOne({
      where: {
        username: userName,
      },
    });
    if (adminResult === null) {
      res.status(400).json({
        error: 'credentials are incorrect',
      });
    } else {
      const token = await getAccessToken();
      res.send(token);
    }
    //solution 2 crados sans admin dans la bdd
    console.log(userName, password);
    if (
      userName === 'appscript@annesophiegabriel.com' &&
      password === 'Toto123!'
    ) {
      const token = await getAccessToken();
      res.send(token);
    } else {
      res.send('credentials are incorrect');
    }
    //solution 3 on creer un user en cryptant le password et on find pour voir s'il correspond
    const hashPassword = await bcrypt.hash(password, saltRounds);
    try {
        const newAdmin = await Admin.create({
            username: userName,
            password: hashPassword,
        })
    } catch (e) {
      e, console.log('error admin not created');
    }
  },
};

module.exports = googleAppScriptController;
