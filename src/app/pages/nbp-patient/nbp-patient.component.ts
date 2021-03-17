import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';
import { NbpPatient } from 'src/app/models/patient/nbpPatient';
import { NbpPatientService } from 'src/app/services/nbp-patients.service';



const ckeckFalsyButNotZero = (value) =>
  value == '' || value === null || value === undefined;

@Component({
  selector: 'nbp-patient',
  templateUrl: './nbp-patient.component.html',
  styleUrls: ['./nbp-patient.component.scss']
})
export class NbpPatientComponent extends NbpBaseComponent implements OnInit {

  @ViewChild('closeModal') closeModal: ElementRef;

  nbpUpdateErrorMessage: string = "";
  saveOrUpdateOrUpdateMessage: string = "";
  nbpModalTitle: string = 'ADD PATIENT';
  alreadyExist: string = "This patient profil already exist by his ID, do you want to update it?";
  saveByError: boolean = false;
  tabella:boolean = true;
  nbpUpdateAndAddPatientShow: boolean = false;
  nbpUpdatePatientShow: boolean = false;
  nbpUpdatePatients: boolean = false;
  nbpPatientInitialProfil = new NbpPatient();
  nbpPatientsClone: Array<any> = [];
  listPatient: Array<any> = [];
  nbpPatientHeaders: Array<any> = [
    { label: "patientId", name: "ID" },
    { label: "patientCode", name: "PATIENT CODE" },
    { label: "patientName", name: "NAME" },
    { label: "patientBirthday", name: "DATE OF BIRTH" },
    { label: "patientSexe", name: "GENDER" },
    { label: "patientFixNumber", name: "FIX NUMBER" },
    { label: "patientDiseases", name: "DISEASES" },
  ];


  constructor(injector: Injector,
    private nbpPatientService: NbpPatientService) {
    super(injector);
  }

  ngOnInit(): void {
    this.NbpGetAllPatients();
  }

  closeModalSaveOrUpdate() {
    this.closeModal.nativeElement.click();
  }

  refresh(): void {
    window.location.reload();
  }

  NbpPatientValues(nbpPatient) {
    nbpPatient.forEach((patient) => {
      this.nbpPatientsClone.push({
        patientId: patient.patientId,
        patientCode: patient.patientCode,
        patientName: patient.patientName,
        patientBirthday: patient.patientBirthday,
        patientSexe: patient.patientSexe,
        patientFixNumber: patient.patientFixNumber,
        patientDiseases: patient.patientDiseases,
      });
      return this.nbpPatientsClone
    })
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
    if (event.name === "patientLastName") {
      this.nbpPatientInitialProfil.patientLastName = event.value;
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

  nbpClose() {
    this.nbpPatientInitialProfil;
    this.nbpUpdateAndAddPatientShow = false;
  }

  nbpOnUpdatePatient() {
    this.nbpUpdatePatients = true;
    //   this.nbpText = false
  }

  NbpOnSavePatient() {
    this.nbpUpdateAndAddPatientShow = true;
  }

  NbpOnDeletePatient() {

  }

  nbpUpdatePatient() {
    const nbpPatient = this.nbpPatientInitialProfil;
    this.nbpPatientService
      .NbpUpdatePatientService(this.nbpPatientInitialProfil.patientId, nbpPatient)
      .subscribe(
        (response: any) => {
          this.nbpUpdateDeleteSaveSuccessMessage = response.message;
          this.nbpUpdatePatientShow = true;
          setTimeout(() => {
            this.nbpUpdatePatientShow = false;
            this.refresh()
          }, 3000)
        },
        (err) => {
          this.nbpUpdateErrorMessage = err.error.error;
        }
      );
  }

  nbpDeletePatient() {
    this.nbpPatientService
      .NbpDeletePatientService(this.nbpPatientInitialProfil.patientId)
      .subscribe(
        (response: any) => {
          this.nbpUpdateDeleteSaveSuccessMessage = response.message;
          this.nbpUpdatePatientShow = true;
          setTimeout(() => {
            this.nbpUpdatePatientShow = false;
            this.refresh()
          }, 3000)
        },
        (err) => {
          this.nbpUpdateErrorMessage = err.error.error;
        }
      );
  }


  nbpSavePatient() {
    this.nbpUpdatePatients = false;
    this.nbpPatientService
      .NbpSavePatientService(this.nbpPatientInitialProfil)
      .subscribe(
        (response: any) => {
          this.closeModalSaveOrUpdate();
          if (response.message === this.alreadyExist) {
            this.saveOrUpdateOrUpdateMessage = response.message;
            this.nbpUpdatePatients = true;
            this.saveByError = true;
            this.tabella = false;
          } else {
            this.nbpUpdateDeleteSaveSuccessMessage = response.message;
            this.nbpUpdatePatientShow = true;
            setTimeout(() => {
              this.nbpUpdatePatientShow = false;
              this.refresh()
            }, 3000)
          }
        },
        (err) => {
          this.nbpUpdateErrorMessage = err.error.error;
        }
      );
  }

  NbpGetAllPatients() {
    this.nbpPatientService.NbpGetPatientService().subscribe(
      (response: any) => {
        this.NbpPatientValues(response);
        console.log("list patientst: ", response)
      },
      (err) => {
        console.log(err.error.error)
      }
    );
  }

  NbpModalOnClickActionPatient(event) {

  }


  nbpClickBackUpdateDelete(event) {

    if (event = 'back') {
      this.saveByError = false;
      this.nbpUpdatePatients = false
    }

    if (event = 'update') {
      this.saveByError = false;
      this.nbpUpdatePatient()
    }

    if (event = 'delete') {
      this.saveByError = false;
      this.nbpDeletePatient()
    }
  }

}





