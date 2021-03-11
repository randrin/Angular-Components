import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';
import { NbpPatient } from "src/app/models/patient/nbpPatient";
import { NbpPatientInitialProfil } from "src/app/models/patient/nbpPatientInitialProfil";


const ckeckFalsyButNotZero = (value) =>
  value == '' || value === null || value === undefined;

@Component({
  selector: 'app-nbp-patient',
  templateUrl: './nbp-patient.component.html',
  styleUrls: ['./nbp-patient.component.scss']
})
export class NbpPatientComponent extends NbpBaseComponent implements OnInit {

  nbpUpdateErrorMessage: string = "";
  nbpUpdatePatient:boolean= true;
  nbpUpdateDisabled:boolean = true;
  nbpPatientInitialProfil = new NbpPatientInitialProfil();


  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  enableButton() {
    this.nbpUpdateDisabled = [
      this.nbpPatientInitialProfil.patientId,
      this.nbpPatientInitialProfil.patientInfoSuppl,
      this.nbpPatientInitialProfil.patientDiseases
    ].every(ckeckFalsyButNotZero);
  }


  nbpInputModel(event) {
    if (event.name === "patientId") {
      this.nbpPatientInitialProfil.patientId = event.value;
    }
    if (event.name === "patientCode") {
      this.nbpPatientInitialProfil.patientCode = event.value;
    }
    if (event.name === "patientName") {
      this.nbpPatientInitialProfil.patientName = event.value;
    }
    if (event.name === "patientLassName") {
      this.nbpPatientInitialProfil.patientLassName = event.value;
    }
    if (event.name === "patientBirthday") {
      this.nbpPatientInitialProfil.patientBirthday = event.value;
    }
    if (event.name === "patientAge") {
      this.nbpPatientInitialProfil.patientAge = event.value;
    }
    if (event.name === "patientSexe") {
      this.nbpPatientInitialProfil.patientSexe = event.value;
    }
    if (event.name === "patientAddress") {
      this.nbpPatientInitialProfil.patientAddress = event.value;
    }
    if (event.name === "patientPostcode") {
      this.nbpPatientInitialProfil.patientPostcode = event.value;
    }
    if (event.name === "patientInfoSuppl") {
      this.nbpPatientInitialProfil.patientInfoSuppl = event.value;
    }
    if (event.name === "patientEmail") {
      this.nbpPatientInitialProfil.patientEmail = event.value;
    }
    if (event.name === "patientPhoneNumber") {
      this.nbpPatientInitialProfil.patientPhoneNumber = event.value;
    }
    if (event.name === "patientFixNumber") {
      this.nbpPatientInitialProfil.patientFixNumber = event.value;
    }
    if (event.name === "patientDiseases") {
      this.nbpPatientInitialProfil.patientDiseases = event.value;
    }
    this.enableButton();
  }

  NbpUpdatePatient(event){
  console.log("eventert: ",event)
  }

}


