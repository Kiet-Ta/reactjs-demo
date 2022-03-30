import http from '../http-common';

const register = (data) => {
  return http.post('/register', data);
};

const RegisterService = {
  register,
};

export default RegisterService;
