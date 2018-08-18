import API from './api';

export const register = async (email, username, password) => {
  const response = await API.post('api/accounts/create/', {
    email,
    username,
    password
  });
  return response.data;
};

export const validate = async (field, value) => {
  const response = await API.get('api/accounts/validate/', {
    params: {
      [field]: value
    }
  });
  return response.data;
};
