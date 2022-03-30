import axios from 'axios';

export default axios.create({
  baseURL: 'http://blog-demo.test/api',
  headers: {
    'Content-type': 'application/json',
  },
});
