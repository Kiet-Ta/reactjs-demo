import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://blog-demo.test/api',
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject({
      data:
        (error.response && error.response.data) || 'Axios Something went wrong',
      errorCode: error.response.status,
    });
  }
);

export default axiosInstance;
