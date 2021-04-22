const sequelize = require('../database.js');
var request = require("request");

const newUserController = {
    createNewUser: (req, res) => {

        const {
            name,
            email,
        } = req.body;
        console.log('----------->', name, email)
       
        var options = {
            method: 'POST',
            url: 'https://dev-ljslmul5.eu.auth0.com/oauth/token',
            headers: { 'content-type': 'application/json' },
            body: {
                client_id: "RfIYAohidWmz0w1yL4MCig3UmGgw8ltR",
                client_secret: "o9fBfZH6H67Ywhyeqiev_cLNQGiG7jf_FzgsLMyegNcVtv1jyC74l8onZd2vd-5a",
                audience: "https://dev-ljslmul5.eu.auth0.com/api/v2/",
                grant_type: "client_credentials"
                    // scope: 'create:users',
       },
        json: true
    };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
        // console.log("--------->", body);
        var options = {
            method: 'POST',
            url: 'https://dev-ljslmul5.eu.auth0.com/api/v2/users',
            headers: {
                authorization: `Bearer ${body.access_token}`
            }, 
            json: true,
            body: {
                email: "jane.doe@example.com",
                password: "heet4jjH",
                connection: "Username-Password-Authentication"},
        }
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                console.log(body);
        });
        });


        res.send('hello clotte')
    }
}

module.exports = newUserController;