export class NbpLocalStorage {
  NbpGetTokenLocalStorage() {
    if (localStorage.getItem("jwtToken")) {
      if (typeof localStorage.getItem("jwtToken") !== "undefined" && JSON.parse(localStorage.getItem("jwtToken")).jwtToken) {
        return JSON.parse(localStorage.getItem("jwtToken")).jwtToken;
      }
    }
  }

  NbpSetTokenLocalStorage(token) {
    localStorage.setItem("jwtToken", JSON.stringify(token));
  }

  NbpRemoveTokenLocalStorage() {
    if (typeof localStorage.getItem("jwtToken") !== "undefined" && localStorage.getItem("jwtToken")) {
      localStorage.removeItem("jwtToken");
    }
  }

  NbpGetAuthHeader() {
    if (typeof localStorage.getItem("jwtToken") !== "undefined" && localStorage.getItem("jwtToken")) {
      const user = JSON.parse(localStorage.getItem("jwtToken"));
      if (user && user.jwtToken) {
        return { Authorization: "Bearer " + user.jwtToken };
      } else {
        return {};
      }
    } else {
      return {};
    }
  }
}
