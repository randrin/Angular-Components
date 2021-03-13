import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';
import { NbpPatient } from 'src/app/models/patient/nbpPatient';
import { NbpPatientService } from 'src/app/services/nbp-patients.service';



const ckeckFalsyButNotZero = (value) =>
  value == '' || value === null || value === undefined;

@Component({
  selector: 'app-nbp-patient',
  templateUrl: './nbp-patient.component.html',
  styleUrls: ['./nbp-patient.component.scss']
})
export class NbpPatientComponent extends NbpBaseComponent implements OnInit {
  dateOfBirth: any

  nbpUpdateErrorMessage: '' = "";
  nbpModalTitle:string='ADD PATIENT'
  nbpUpdateAndAddPatientShow: boolean = false;
  nbpUpdatePatientShow:boolean = false;
  nbpText:boolean= true;
  nbpPatientInitialProfil = new NbpPatient();
  listPatients: {};
  nbpPatientHeaders: Array<any> = [
    { label: "ID", name: "ID" },
    // { label: "PATIENT CODE", name: "patientCode" },
    { label: "NAME", name: "NAME" },
    { label: "LASTNAME", name: "LASTNAME" },
    { label: "DATE OF BIRTH", name: "DATE OF BIRTH" },
    // { label: "AGE", name: "patientAge" },
    { label: "GENDER", name: "GENDER" },
    // { label: "ADDRESS", name: "patientAddress" },
    // { label: "POSTCODE", name: "patientPostcode" },
    // { label: "INFOS SUPP.", name: "patientInfoSuppl" },
    // { label: "EMAIL", name: "patientEmail" },
    // { label: "PHONE NUMBER", name: "patientPhoneNumber" },
    // { label: "FIX NUMBER", name: "patientFixNumber" },
    // { label: "DISEASES", name: "patientDiseases" }
  ];


  constructor(injector: Injector,
    private nbpPatientService: NbpPatientService) {
    super(injector);
  }

  ngOnInit(): void {
    this.NbpGetAllPatients()
  }

  // enableButton() {
  //   this.nbpUpdateDisabled = [
  //     this.nbpPatientInitialProfil.patientId,
  //     this.nbpPatientInitialProfil.patientInfoSuppl,
  //     this.nbpPatientInitialProfil.patientDiseases
  //   ].every(ckeckFalsyButNotZero);
  // }


  nbpInputModel(event) {
    console.log("eventModel: ", event)
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
    //   this.enableButton();
  }

  nbpClose(){
    this.nbpPatientInitialProfil ;
    this.nbpUpdateAndAddPatientShow = false;
  }

  NbpOnUpdatePatient(){
    this.nbpUpdatePatientShow = true;
    this.nbpText = false
  }

  NbpOnSavePatient(){
    this.nbpUpdateAndAddPatientShow = true;
  }

  NbpOnDeletePatient(){

  }
  
  nbpUpdatePatient() {
    const nbpPatient = this.nbpPatientInitialProfil;
    this.nbpPatientService
      .NbpUpdatePatientService(this.nbpPatientInitialProfil.patientId, nbpPatient)
      .subscribe(
        (response: any) => {
          //      this.nbpShowFormUpdateProfile = false;
          this.nbpUpdateSuccessMessage = response.message;
          setTimeout(() => {
            this.nbpUpdateSuccessMessage = "";
          }, 3000)
        },
        (err) => {
          //    this.nbpShowFormUpdateProfile = true;
          this.nbpUpdateErrorMessage = err.error.error;
        }
      );
  }

  nbpDeletePatient() {
    this.nbpPatientService
      .NbpDeletePatientService(this.nbpPatientInitialProfil.patientId)
      .subscribe(
        (response: any) => {
          //      this.nbpShowFormUpdateProfile = false;
          this.nbpUpdateSuccessMessage = response.message;
          setTimeout(() => {
            this.nbpUpdateSuccessMessage = "";
          }, 3000)
        },
        (err) => {
          //    this.nbpShowFormUpdateProfile = true;
          this.nbpUpdateErrorMessage = err.error.error;
        }
      );
  }


  nbpSavePatient() {
    this.nbpPatientService
      .NbpSavePatientService(this.nbpPatientInitialProfil)
      .subscribe(
        (response: any) => {
          //      this.nbpShowFormUpdateProfile = false;
          this.nbpUpdateSuccessMessage = response.message;
          setTimeout(() => {
            this.nbpUpdateSuccessMessage = "";
          }, 3000)
        },
        (err) => {
          //    this.nbpShowFormUpdateProfile = true;
          this.nbpUpdateErrorMessage = err.error.error;
        }
      );
  }

  NbpGetAllPatients() {

 //   this.nbpShowErrorMessage = false;
    this.nbpPatientService.NbpGetPatientService().subscribe(
      (response: any) => {
        this.listPatients = response;
        console.log("list patients: ",response)
      },
      (err) => {
        // this.nbpShowErrorMessage = true;
        // this.nbpErrorMessage = err.error.error;
      }
    );
  }

  NbpModalOnClickActionPatient(event){

  }

}




