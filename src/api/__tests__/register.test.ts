import {getUsers, addUser, signIn} from '../register';
const axios = require('axios');

jest.mock('axios');

const user = {
  id: 1,
  firstName: 'Mobile Engineer',
  lastName: 'bitcoin IRA',
  email: 'engineer@bitcoinira.com',
  password: 'password1',
  city: 'Los Angeles',
  country: 'USA',
  dateOfBirth: '01/01/2000',
  mobile: '800-245-8789',
};

describe('register api calls', () => {
  it('fetches users', async () => {
    axios.get.mockResolvedValue({
      data: [user],
    });
    const users = await getUsers();
    expect(users).toEqual([user]);
  });

  it('adds a user', async () => {
    axios.post.mockResolvedValue({
      data: [user],
    });

    const response = await addUser({
      email: 'engineer@bitcoinira.com',
      password: 'password1',
      firstName: 'Mobile Engineer',
      lastName: 'bitcoin IRA',
      city: 'Los Angeles',
      country: 'USA',
      dateOfBirth: new Date('01012000'),
      mobile: '18002458789',
    });
    expect(response).toEqual([user]);
  });

  it('signs in a user', async () => {
    axios.get.mockResolvedValue({
      data: [user],
    });
    const auth = await signIn('engineer@bitcoinira.com', 'password1');
    expect(auth).toEqual(true);
  });
});
