import axios from 'axios';
import { AsyncStorage } from 'react-native';

const BASE_URL = 'https://backend-ayudandonos-cancun.herokuapp.com';

axios.defaults.baseURL = BASE_URL
axios.defaults.DEFAULT_CONTENT_TYPE = 'application/json';

axios.interceptors.request.use(async function (config) {
  const accessToken = await AsyncStorage.getItem('accessToken');
  const User = await AsyncStorage.getItem('user');
  if (accessToken !== null) {
    config.headers.Authorization = accessToken;
  }
  if (config.url === '/uploads') {
    config.headers['Content-Type'] = 'multipart/form-data'
  }
  if (config.url === '/users/me') {
    if (User !== null) {
      const activeUser = JSON.parse(User);
      config.url = '/users/' + activeUser._id;
    } else {
      throw 'Not an active user';
    }
  }
  if (config.url === '/products' && config.method === 'post') {
    if (User !== null) {
      const activeUser = JSON.parse(User);
      config.data['user'] = activeUser._id;
    } else {
      throw 'Inactive users cannot create products';
    }
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});


export default {
  Auth: {
    login: (params) => axios.post('/authentication', params),
    register: (params) => axios.post('/users', params),
  },
  Address: {
    create: (params) => axios.post('/addresses', params),
    get: (filters) => axios.get(`/addresses/`, { params: filters }),
  },
  Product: {
    create: (params) => axios.post('/products', params),
    getAll: (filters) => axios.get('/products',{ params: filters }),
    get: (id) => axios.get(`/products/${id}`),
  },
  Image: {
    upload: (params) => axios.post('/uploads', params),
    get: (id)=> axios.get(`/uploads/${id}`),
  },
  User: {
    getAll: () => axios.get('/users'),
    get: (user) => axios.get(`/users/${user}`),
    getSelf: () => axios.get('/users/me'),
  },
  Categories: {
    getAll: () => axios.get('/categories')
  }
}
