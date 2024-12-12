import API from './api';

export const login = async (data) => API.post('/users/login', data);
export const signup = async (data) => API.post('/users/signup', data);
