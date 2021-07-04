import axios from './axios';

export default class authService {
  static signIn(data) {
    return axios.post('/sign_in', data);
  }

  static signUp(data) {
    return axios.post('/sign_up', data);
  }
}
