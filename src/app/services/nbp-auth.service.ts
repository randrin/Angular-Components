import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NbpUser } from "../models/user/nbpUser";
import { NbpLocalStorage } from "../utils/nbp-local-storage"; 

@Injectable({
  providedIn: "root",
})
export class NbpAuthService {
  private nbpLoginUrl = window["baseUrl"] + "/v1/api/login";
  private nbpRegisterUrl = window["baseUrl"] + "/v1/api/register";
  private nbpResetPasswordUrl = window["baseUrl"] + "/v1/api/user/resetPassword";
  private nbpShowPasswordUrl = window["baseUrl"] + "/v1/api/user/forgottenPassword";
  private nbpLogoutUrl = window["baseUrl"] + "/v1/api/logout";

  nbpUser: NbpUser;

  constructor(
    private http: HttpClient,
    private nbpLocalStorage: NbpLocalStorage
  ) {}

  public setNbpUser(nbpUser) {
    this.nbpUser = nbpUser;
  }
  
  public NbpLoginService(nbpUser) {
    return this.http.post(this.nbpLoginUrl, nbpUser);
  }

  public NbpRegisterService(nbpUser) {
    return this.http.post(this.nbpRegisterUrl, nbpUser); 
  }

  public NbpResetPasswordService(nbpUser) {
    return this.http.post(this.nbpResetPasswordUrl, nbpUser);
  }

  public NbpSearchForgottenPasswordService(nbpUser) {
    return this.http.get(this.nbpShowPasswordUrl + "/" +nbpUser);
  }

  public NbpLogoutService(nbpUser) {
    return this.http.put(this.nbpLogoutUrl, nbpUser, {
      headers: this.nbpLocalStorage.NbpGetAuthHeader(),
    });
  }
}
  