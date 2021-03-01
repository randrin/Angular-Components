import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NbpLocalStorage } from "../utils/nbp-local-storage"; 

@Injectable({
  providedIn: "root",
})
export class NbpAuthService {
  private nbpLoginUrl = window["baseUrl"] + "/v1/api/login";
  private nbpRegisterUrl = window["baseUrl"] + "/v1/api/register";
  private nbpResetPasswordUrl = window["baseUrl"] + "/v1/api/user/resetPassword";
  private nbpShowPasswordUrl = window["baseUrl"] + "/v1/api/user/forgottenPassword";


  constructor(
    private http: HttpClient,
    private nbpLocalStorage: NbpLocalStorage
  ) {}

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
}
  