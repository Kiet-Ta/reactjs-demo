import axios from 'axios';

axios.defaults.withCredentials = true;
const axiosInstance = axios.create({
  baseURL: 'http://blog-demo.test/api',
  headers: {
    'Content-type': 'application/json',
    // 'X-CSRF-TOKEN': 'eyJpdiI6ImhTeVowRm1CQ0x1U0UrVXAxaURuY2c9PSIsInZhbHVlIjoiNnVhblY4Q05GQ2R3Rmt1alhXNkRIRzNiaUhCSmtHakdWUng1NDVhaUlDM3RtOUlzUjRpZEhPcXZCOGNqK0xmdWRSMGhMTGR1K3ZrZUZOVWo4Y1JiUDB1ZzdXSThjQ2VvV3lLMGM3ZU81ZDhwUmRHWjlucmsycXI0cEc4TnY3NUwiLCJtYWMiOiJhYzIxMjc5YjY0YjAyN2VmZDdkOTgzNjc2ZjA4ZDc2NDRhNDk2OTAyY2JkYTEyNjJjNDIxMmEyNTBlNjVlMzczIiwidGFnIjoiIn0%3D',
  },
  withCredentials: true,
});
axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axiosInstance.defaults.withCredentials = true;
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      data:
        (error.response && error.response.data) || 'Axios Something went wrong',
      errorCode: error.response.status,
    });
  }
);

export default axiosInstance;
// export default axios.create({
//   baseURL: 'http://blog-demo.test/api',
//   headers: {
//     'Content-type': 'application/json',
//   },
// });
