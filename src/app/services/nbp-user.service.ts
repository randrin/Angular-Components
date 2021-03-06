import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NbpLocalStorage } from "../utils/nbp-local-storage";

@Injectable({
  providedIn: "root",
})
export class NbpUserService {
  private nbpUserUrl = window["baseUrl"] + "/v1/api/user";
  private nbpUsersUrl = window["baseUrl"] + "/v1/api/users";
  private nbpUserDeleteUrl = window["baseUrl"] + "/v1/api/user/delete";
  private nbpUserPermissionUrl = window["baseUrl"] + "/v1/api/user/permission";
  private nbpUserUpdateUrl = window["baseUrl"] + "/v1/api/user/update";
  private nbpChangePasswordUrl = window["baseUrl"] + "/v1/api/user/changePassword"

  constructor(
    private http: HttpClient,
    private nbpLocalStorage: NbpLocalStorage
  ) {}

  public NbpGetUserService(token) {
    return this.http.get(this.nbpUserUrl + "/" + token, {
      headers: this.nbpLocalStorage.NbpGetAuthHeader(),
    });
  }

  public NbpGetUsersService() {
    return this.http.get(this.nbpUsersUrl, {
      headers: this.nbpLocalStorage.NbpGetAuthHeader(),
    });
  }

  public NbpDeleteUserService(nbpUserId) {
    return this.http.delete(this.nbpUserDeleteUrl + "/" + nbpUserId, {
      headers: this.nbpLocalStorage.NbpGetAuthHeader(),
    });
  }

  public NbpActivateOrDisableUserService(nbpUserId) {
    return this.http.put(this.nbpUserPermissionUrl + "/" + nbpUserId, {
      headers: this.nbpLocalStorage.NbpGetAuthHeader(),
    });
  }

  public NbpUpdateUserService(nbpUserId, nbpUser) {
    return this.http.put(this.nbpUserUpdateUrl + "/" + nbpUserId, nbpUser, {
      headers: this.nbpLocalStorage.NbpGetAuthHeader(),
    });
  }

  public NbpChangePasswordService(nbpUserId, nbpUserPwd) {
    return this.http.put(this.nbpChangePasswordUrl + "/" + nbpUserId, nbpUserPwd , {
      headers: this.nbpLocalStorage.NbpGetAuthHeader(),
    });
  }
}
