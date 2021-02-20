import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NbpLocalStorage } from "../utils/nbp-local-storage";

@Injectable({
  providedIn: "root",
})
export class NbpUserService {
  private nbpProfileUrl = window["baseUrl"] + "/v1/api/user";
  private nbpUsersUrl = window["baseUrl"] + "/v1/api/users";

  constructor(
    private http: HttpClient,
    private nbpLocalStorage: NbpLocalStorage
  ) {}

  public NbpGetUserService(token) {
    return this.http.get(this.nbpProfileUrl + "/" + token, {
      headers: this.nbpLocalStorage.NbpGetAuthHeader(),
    });
  }

  public NbpGetUsersService() {
    return this.http.get(this.nbpUsersUrl, {
      headers: this.nbpLocalStorage.NbpGetAuthHeader(),
    });
  }
}
