import API from './api';

export const login = async (email, password) => {
  const response = await API.post('api-token-auth/', {
    email,
    password
  });
  return response.data.token;
};
