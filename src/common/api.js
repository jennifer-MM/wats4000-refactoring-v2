import axios from 'axios';
export const API = axios.create({
    baseURL: `//api.openweathermap.org/data/2.5/`
  })
  API.interceptors.request.use(function (config) {
      // Set common parameters on each request
      config.params.APPID = 'e0a8b06f7e60be30d628d40e67e8478f';
      config.params.units = 'imperial';
      return config;
    }, function (error) {
      return Promise.reject(error);
    });