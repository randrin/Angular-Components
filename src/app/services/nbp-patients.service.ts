import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbpLocalStorage } from '../utils/nbp-local-storage';

@Injectable({
  providedIn: 'root'
})
export class NbpPatientService {
  private nbpPatientUrl = window["basePatientUrl"] + "/v1/api/patients";
  private nbpPatientDeleteUrl = window["basePatientUrl"] + "/v1/api/delete";
  private nbpPatientUpdateUrl = window["basePatientUrl"] + "/v1/api/update";
  private nbpPatientSaveUrl = window["basePatientUrl"] + "/v1/api/addPatient";

  constructor(
    private http: HttpClient,
    private nbpLocalStorage: NbpLocalStorage
  ) { }


  public NbpGetPatientService() {
    return this.http.get(this.nbpPatientUrl, {
      headers: this.nbpLocalStorage.NbpGetAuthHeader(),
    });
  }

  public NbpDeletePatientService(nbpPatientId) {
    return this.http.delete(this.nbpPatientDeleteUrl + "/" + nbpPatientId, {
      headers: this.nbpLocalStorage.NbpGetAuthHeader(),
    });
  }

  public NbpUpdatePatientService(nbpPatientId, nbpPatient) {
    return this.http.put(this.nbpPatientUpdateUrl + "/" + nbpPatientId, nbpPatient, {
      headers: this.nbpLocalStorage.NbpGetAuthHeader(),
    });
  }

  public NbpSavePatientService(nbpPatientId) {
    return this.http.post(this.nbpPatientSaveUrl, nbpPatientId);
  }
}


