import axios from "axios";

class AuthService {
  
  // for custom auth header
  // getBasicHeader(username, password) {
  //   return "Basic " + window.btoa(username + ":" + password);
  // }

  getJwtHeader(token) {
    return "Bearer " + token;
  }

  // login(username, password) {
  //   // let basicHeader = "Basic " + window.btoa(username + ":" + password);

  //   sessionStorage.setItem("user", username);
  //   this.setInterceptor(this.getBasicHeader(username, password)); // have to set it at login stage
  // }

  login(username, token) {
    sessionStorage.setItem("user", username);
    this.setInterceptor(this.getJwtHeader(token));
  }

  // authorizeHeaders(username, password) {
  //   return axios.get("http://localhost:8080/basicauth", {
  //     headers: { authorization: this.getBasicHeader(username, password) },
  //   });
  // }

  executeJwtService(username, password) {
    return axios.post("http://localhost:8080/authenticate", {username, password});
  }

  logout() {
    sessionStorage.removeItem("user");
  }

  isLoggedIn() {
    let user = sessionStorage.getItem("user");

    if (user === null) return false;
    else return true;
  }

  // this will intercept all request sent to localhost and add this header to the req header
  // so you don't have to add the header to every req manually
  // setInterceptor(basicHeader) {
  //   axios.interceptors.request.use((config) => {
  //     if (this.isLoggedIn()) {
  //       config.headers.authorization = basicHeader;
  //     }
  //     return config;
  //   });
  // }

  setInterceptor(token) {
    axios.interceptors.request.use((config) => {
      if (this.isLoggedIn()) {
        config.headers.authorization = token;
      }
      return config;
    });
  }
}

export default new AuthService();
