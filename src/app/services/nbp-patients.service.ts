import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbpLocalStorage } from '../utils/nbp-local-storage';

@Injectable({
  providedIn: 'root'
})
export class NbpPatientsService {
  private nbpUserUrl = window["baseUrl"] + "/v1/api/user";
  private nbpUsersUrl = window["baseUrl"] + "/v1/api/users";
  private nbpUserDeleteUrl = window["baseUrl"] + "/v1/api/user/delete";
  private nbpUserUpdateUrl = window["baseUrl"] + "/v1/api/user/update";

  constructor(
    private http: HttpClient,
    private nbpLocalStorage: NbpLocalStorage
  ) {}



  // public NbpGetPatientsService() {
  //   return this.http.get(this.nbpUsersUrl, {
  //     headers: this.nbpLocalStorage.NbpGetAuthHeader(),
  //   });
  // }

  // public NbpDeletePatientService(nbpUserId) {
  //   return this.http.delete(this.nbpUserDeleteUrl + "/" + nbpUserId, {
  //     headers: this.nbpLocalStorage.NbpGetAuthHeader(),
  //   });
  // }

  // public NbpUpdatePatientService(nbpUserId, nbpUser) {
  //   return this.http.put(this.nbpUserUpdateUrl + "/" + nbpUserId, nbpUser, {
  //     headers: this.nbpLocalStorage.NbpGetAuthHeader(),
  //   });
  // }
}


