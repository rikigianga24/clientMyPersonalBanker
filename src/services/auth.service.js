import axios from "axios";

const API_URL = "http://localhost:8000";

class AuthService {
  login(cf, password) {
    return axios
      .post(API_URL + "/authentication", {
        cf,
        password
      })
      .then(response => {
        if (response.data.token) {
          sessionStorage.setItem("user", response.data.token);
        }
        return response.data;
      });
  }

  logout() {
    sessionStorage.removeItem("user");
  }

  getCurrentUser() {
    return sessionStorage.getItem('user')
  }
}

export default new AuthService();
