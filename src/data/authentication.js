import API from './api';

export const login = async (email, password) => {
  let response = await API.post('api-token-auth/', {
    email: email,
    password: password
  });
  return response.data.token;
};
