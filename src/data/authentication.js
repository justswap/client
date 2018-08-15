import API from './api';

export const login = async (email, password) => {
  const response = await API.post('api-token-auth/', {
    email,
    password
  });
  return response.data.token;
};

export const refreshToken = async token => {
  const response = await API.post('api-token-refresh/', {
    token
  });
  return response.data.token;
};
