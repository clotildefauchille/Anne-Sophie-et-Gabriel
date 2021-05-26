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
        },
        json: true,
    };
    const responseToken = await axios(getTokenOptions);
    return responseToken.data.access_token;
};

const getAuth0LoginInfo = async (token) => {
    const options = {
        method: 'GET',
        url: `https://dev-ljslmul5.eu.auth0.com/api/v2/users`,
        params: {"email":"1"},
        headers: { authorization: `Bearer ${token}` },
    };
    const responseGetLoginInfos = await axios(options);
    // console.log('---------->responseGetLoginInfo', responseGetLoginInfos.data);
    const loginArray = responseGetLoginInfos.data
    const responseLastLogin = loginArray.map((loginInfo) => {
        return {
            lastLogin: loginInfo.last_login,
        };
});
    // console.log('----------->responseLastLogin', responseLastLogin);
    return responseLastLogin;
};
const loginController = {
 getLoginInfo: async (req, res) => {
const token = await getAccessToken();

        try {
            const response = await getAuth0LoginInfo(token);
            console.log('response', response);
            res.send(response);

        } catch (err) {
            console.log(
                'err get login info auth0',
                err.response.data.statusCode,
                err.response.data.message,
                err.response.statusText,
            );
        }
 },
};

module.exports = loginController;
