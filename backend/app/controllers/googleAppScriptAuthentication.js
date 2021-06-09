import e from "express";

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

const getTokenIfAuthorized = async (username, password) => {
    if (username === "appscript@annesophiegabriel.com" && password === "Toto123!") {
        const token = await getAccessToken();
        return {token};
    } else {
        return {error: "credentials are incorrect"}
    }
}

const googleAppScriptAuthenticateController = { 
    authenticate: async (req, res) => {
        const {username, password} = req.body;
        const response = getTokenIfAuthorized(username, password)
        res.send(response);
    }
}

module.exports = googleAppScriptAuthenticateController;