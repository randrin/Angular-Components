export class NbpLocalStorage {
  NbpGetTokenLocalStorage() {
    if (localStorage.getItem("jwtToken")) {
      if (JSON.parse(localStorage.getItem("jwtToken")).jwtToken) {
        return JSON.parse(localStorage.getItem("jwtToken")).jwtToken;
      }
    }
  }
}
