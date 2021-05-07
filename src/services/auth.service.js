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
          localStorage.setItem("user", response.data.token);
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return localStorage.getItem('user')
  }
}

export default new AuthService();
