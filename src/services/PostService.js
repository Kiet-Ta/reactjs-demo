import http from '../http-common';
import authHeader from './auth-header';

const getAll = () => {
  return http.get('/posts', { headers: authHeader() });
};
const get = (id) => {
  return http.get(`/posts/${id}`, { headers: authHeader() });
};
const create = (data) => {
  return http.post('/posts', data);
};
const update = (id, data) => {
  return http.put(`/posts/${id}`, data, { headers: authHeader() });
};
const remove = (id) => {
  return http.delete(`/posts/${id}`, { headers: authHeader() });
};
const removeAll = () => {
  return http.delete(`/posts`, { headers: authHeader() });
};
const findByTitle = (title) => {
  return http.get(`/posts?title=${title}`, { headers: authHeader() });
};
const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;
