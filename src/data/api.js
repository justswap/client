import axios from 'axios';
import store from '../store/store';

const api = axios.create({
  baseURL: `http://127.0.0.1:8000/`
});

api.interceptors.request.use(
  config => {
    const JWT = store.getState().JWT;
    if (JWT) {
      config.headers.Authorization = `Authorization: JWT ${JWT}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
