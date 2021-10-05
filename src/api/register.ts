const axios = require('axios');
import User from '../interfaces/User';

const url = 'http://localhost:3000/users';

export const getUsers = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const addUser = async (user: User) => {
  const response = await axios.post(url, user);
  return response.data;
};

export const signIn = async (email: string, password: string) => {
  const response = await axios.get(url);
  let authenticated = false;
  response.data.map((user: User) => {
    user.email == email && user.password == password && (authenticated = true);
  });
  return authenticated;
};
