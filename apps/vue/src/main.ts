import './styles.css';

import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import axios from 'axios';
import OpenAPIClientAxios from 'openapi-client-axios';

const app = createApp(App);

app.use(router);

// TODO: Seperated file for Axios (some sort of hook)?
export const api = new OpenAPIClientAxios({
  definition: 'http://localhost:3000/documentation/json',
  axiosConfigDefaults: {
    baseURL: 'http://localhost:3000',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  },
});

axios.interceptors.response.use(response => {
  if (response.status === 401) {
    localStorage.removeItem('token');
    router.push('/login').then();
  }
  return response;
});

app.mount('#root');
