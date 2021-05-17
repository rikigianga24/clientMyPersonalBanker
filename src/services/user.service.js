import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000';

class UserService {
  getPublicContent() {
    console.log(API_URL+'/api/users.json')
    return axios.get(API_URL + '/api/users.json', { headers: authHeader() });
  }

  getCurrentProfile(cf) {
    return new Promise((resolve)=>{
      axios(API_URL + '/api/users/'+cf+".json", { headers: authHeader() })
      .then(resp => {
        console.log(JSON.stringify(resp.data))
        console.log(resp.data.cf)
        resolve(resp.data)
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });;
    }) 
  }

  getBankAccountInfos(iban){
    return new Promise((resolve)=>{
      axios(API_URL + iban +".json", { headers: authHeader() })
      .then(resp => {
        console.log(JSON.stringify(resp.data))
        console.log(resp.data.cf)
        resolve(resp.data)
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });;
    })
  }

}

export default new UserService();
