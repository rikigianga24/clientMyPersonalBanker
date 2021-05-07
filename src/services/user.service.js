import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000';

class UserService {
  getPublicContent() {
    console.log(API_URL+'/api/users.json')
    return axios.get(API_URL + '/api/users.json', { headers: authHeader() });
  }

  getUserBoard() {
    
    return axios.get(API_URL + '/users', { headers: authHeader() });
  }

  getBankAccountInfos(){
    return axios.get(API_URL + '/api/conto_correntes', { headers : authHeader() })
  }

}

export default new UserService();
