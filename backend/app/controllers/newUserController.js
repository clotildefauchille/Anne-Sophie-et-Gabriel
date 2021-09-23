// const sequelize = require('../database.js');
const dayjs = require('dayjs');
require('dayjs/locale/fr');
// var request = require('request');
// const { Events } = require('../models');
const Answer = require('../models/answer.js');
const bcrypt = require('bcrypt');
const {
  createAuth0Users,
  getAccessToken,
  createAnswers,
} = require('./utils.js');
const saltRounds = 10;

const formatDate = (date) => {
  const newDate = dayjs(date).locale('fr').format('D MMM YYYY');
  return newDate;
};
const getAuth0UserInfos = async (userId, token) => {
  const options = {
    method: 'GET',
    url: `https://dev-ljslmul5.eu.auth0.com/api/v2/users/${userId}`,
    headers: { authorization: `Bearer ${token}` },
  };
  const responseGetUserInfos = await axios(options);
  // console.log('responseGetUserInfos',responseGetUserInfos.data)
  return {
    lastname: responseGetUserInfos.data.family_name,
    firstname: responseGetUserInfos.data.given_name,
    email: responseGetUserInfos.data.email,
    metadata: responseGetUserInfos.data.user_metadata,
    last_login: formatDate(responseGetUserInfos.data.last_login),
  };
};
// Pour pouvoir map il faut utiliser la méthode Promise.All(iterable) qui renvoie une promesse
// ..qui est résolue lorsque que toutes les promesses s'exécutent
//promise.all permet de mener des opérations asynchrones en parallèle.
const hashGuestsPasswords = async (guests) =>
  await Promise.all(
    guests.map(async (guest) => ({
      ...guest,
      password: await bcrypt.hash(guest.password, saltRounds),
    })),
  );

const updateAnswerLoginInfo = async (lastLogin, email) => {
  const updateAnswerLogin = await Answer.update(
    {
      last_login: `${lastLogin}`,
    },
    {
      where: {
        email: `${email}`,
      },
    },
  );
  console.log('updateAnswerLogin', updateAnswerLogin);
};

const createGuests = async (guests) => {
  let created;
  const token = await getAccessToken();
  console.log('token is: ', token);
  //on vire les guests sans email
  guests = guests.filter((elem) => elem.email != null);
  // console.log('============passwords', passwords);
  guests = await hashGuestsPasswords(guests);
  try {
    //creation d'un range et d'une permission dans la table answers dans la BDD wedding.sql
    // TODO ne pas ecrire de reponse lors de l'update des user auth0
    const answersCreated = await createAnswers(guests);
    console.log('answersCreated is: ', answersCreated);
    try {
      //creation d'un user dans la BDD de Auth0Provider
      const authUserResponse = await createAuth0Users(guests, token);
      console.log('authUserResponse is: ', authUserResponse);
      created = { created: answersCreated.length };
    } catch (err) {
      console.log(
        'err creating user auth0',
        err.response.data.statusCode,
        err.response.data.message,
        err.response.statusText,
      );
      created = { error: 'Could not create auth users' };
    }
  } catch (e) {
    console.log('error on answer creation', e);
    created = { error: 'could not create answers' };
  }

  return created;
};

const newUserController = {
  createNewUser: async (req, res) => {
    let guests = req.body;
    console.log(guests);
    const result = createGuests(guests);
    res.send(result);
  },
  getUserInfos: async (req, res) => {
    let userId = req.params.id;
    //récupération du token d'acces pour pouvoir faire appel à l'API sécurisé d'Auth0 Management
    const token = await getAccessToken();
    try {
      //appel à l'API Auth0 Management qui détient les données de last-login
      const reponseInfos = await getAuth0UserInfos(userId, token);
      console.log('-------->responseInfos', reponseInfos);
      const lastLogin = reponseInfos.last_login;
      const email = reponseInfos.email;
      //update de la donnée de last-login dans la table Answer
      await updateAnswerLoginInfo(lastLogin, email);
      res.send(reponseInfos);
    } catch (e) {
      console.log('erreur de getUsersInfos', e);
    }
  },
};

module.exports = {
  ...newUserController,
  createGuests,
  createAnswers,
  createAuth0Users,
};
