var newUserController = require('./newUserController');
var utils = require('./utils');

jest.mock('Sequelize');
jest.mock('./utils', () => {
  const mockGetAccessToken = () => {
    return Promise.resolve('MyFakeToken');
  };

  return {
    getAccessToken: jest.fn(mockGetAccessToken),
    createAuth0Users: jest.fn(),
    createAnswers: jest.fn(),
  };
});

describe('newUserController', () => {
  const guests = [
    { email: 'florent fauchille', password: 'Flo1234' },
    { email: 'Clotilde fauchille', password: 'Clo1234' },
  ];

  test('createGuests: should return created guest when everything is fine', async () => {
    const mockCreateAuth0Users = () => {
      return Promise.resolve([]);
    };

    const mockCreateAnswers = (guests) => {
      console.log('MOCK createAnswers; guests are: ', guests);
      const answers = ['answerGuest1', 'answerGuest2'];
      return Promise.resolve(answers);
    };

    utils.createAnswers.mockImplementation(mockCreateAnswers);
    utils.createAuth0Users.mockImplementation(mockCreateAuth0Users);

    expect(await utils.getAccessToken()).toBe('MyFakeToken');
    expect(await newUserController.createGuests(guests)).toStrictEqual({
      created: 2,
    });
  });

  test("creatGuests: should return an error if we can't create answers", async () => {
    const mockCreateAnswers = (guests) => {
      return Promise.reject('BOOM!');
    };
    utils.createAnswers.mockImplementation(mockCreateAnswers);
    expect(await newUserController.createGuests(guests)).toStrictEqual({
      error: 'could not create answers',
    });
  });

  test("createGuests: should return an error if we can't create OAuth user", async () => {
    const mockCreateAnswersSuccess = (guests) => {
      return Promise.resolve(['answers1, answers2']);
    };

    const mockCreateAuth0UsersFailed = (guests, token) => {
      const err = {
        response: {
          data: {
            statsCode: 500,
            message: 'BOOOM',
          },
          statusText: 'failed',
        },
      }
      return Promise.reject(err);
    };
    utils.createAnswers.mockImplementation(mockCreateAnswersSuccess);
    utils.createAuth0Users.mockImplementation(mockCreateAuth0UsersFailed);

    expect(await newUserController.createGuests(guests)).toStrictEqual({
      error: 'Could not create auth users',
    });
  });
});
