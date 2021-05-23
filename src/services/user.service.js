import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000';

class UserService {
  getPublicContent() {
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

  getAllTransactionFromIBAN(iban){
    return new Promise((resolve)=>{
      axios(API_URL + "/api/transazioniperiban/" + iban, { headers: authHeader() })
      .then(resp => {
        console.log(JSON.stringify(resp.data))
        resolve(resp.data)
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });;
    }) 
  }

  getTransactionFromID(url) {
    return new Promise((resolve)=>{
      axios(API_URL + url +".json", { headers: authHeader() })
      .then(resp => {
        console.log(JSON.stringify(resp.data))
        console.log(API_URL + url)
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

  getIdTransaction(iban){
    new Promise((resolve)=>{
    return axios(API_URL+"/api/findLastTransactionForIban/"+iban)
    .then(resp => {
      console.log(API_URL+"/api/findLastTransactionForIban/"+iban)
      console.log(JSON.stringify(resp.data))
      resolve(resp.data)
      this.sendMail(resp.data)
  })
  .catch(err => {
      // Handle Error Here
      console.error(err);
  });
  })
  }

  sendMail(id){
    new Promise((resolve)=>{
    axios.get(API_URL+"/api/email/"+id)
    .then(resp => {
      resolve(resp.data)
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });;
    })
  }

  postPayment(iban_p,importo_p,tipo_p,iban_destinatario_p){
    new Promise((resolve)=>{
        axios.post(API_URL+ "/api/transaziones",{
        ibanMittente: iban_p,
        importo:importo_p,
        tipo:tipo_p,
        ibanDestinatario:iban_destinatario_p,
        movimento:"Uscita"
    } ,{ headers: authHeader() })
    .then(resp => {
      resolve(resp.data)
        sessionStorage.setItem("resp",resp.data)
      return resp.data  
    })
  })
  }
}


export default new UserService();
