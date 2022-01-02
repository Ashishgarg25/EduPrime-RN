// import * as axios from 'react-native-axios';
import axios from 'axios';
import Constants from '../utilities/constants/Constants'

var axiosInstance = axios.create({
    baseURL: 'https://k8s-be.eduprime.co.id/api',
    timeout: 60000,
    headers: {'Content-Type': 'application/json',"Authorization":`Bearer ${Constants.token}`}
  });
console.log(axiosInstance.baseURL,"urlss")


axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export { axiosInstance as default };