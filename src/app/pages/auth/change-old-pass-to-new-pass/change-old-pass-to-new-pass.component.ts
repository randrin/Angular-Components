import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';
import { NbpUserService } from 'src/app/services/nbp-user.service';
import { NbpLocalStorage } from 'src/app/utils/nbp-local-storage';

@Component({
  selector: 'change-old-pass-to-new-pass',
  templateUrl: './change-old-pass-to-new-pass.component.html',
  styleUrls: ['./change-old-pass-to-new-pass.component.scss']
})
export class ChangeOldPassToNewPassComponent extends NbpBaseComponent implements OnInit {
  nbpPasswordDisabled: boolean = true;
  nbpChangePasswordSuccess:boolean = false;
  nbpErrorMessage: string = "";
  nbpShowErrorMessage: boolean = false;
  nbpUpdateDisabled: boolean = true;
  nbpChangeOldPasswordErrorMessage: string = "";
  changeOldPasswordToNew:boolean;
  nbpRegisterErrorMessage: string = "";
  nbpConfirmPassword: string = "";
  nbpGeneratePasswordErrorMessage: string;
  nbpOldPassword: string = "";

  constructor(
    injector: Injector,
    private nbpUserService: NbpUserService,
    nbpLocalStorage: NbpLocalStorage
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  nbpSetUpComponent() {
    this.nbpPasswordDisabled =
      !this.nbpAuth.changePassword.oldPassword.length ||
      !this.nbpAuth.changePassword.newPassword.length ||
      !this.nbpConfirmPassword
        ? true
        : false;
    this.nbpRegisterErrorMessage = "";
  }

  nbpInputModels(event) {
    if (event.name === "oldPassword") {
      this.nbpAuth.changePassword.oldPassword = event.value;
    }
    if (event.name === "newPassword") {
      this.nbpAuth.changePassword.newPassword = event.value;
    }
    if (event.name === "confirmPassword") {
      this.nbpConfirmPassword = event.value;
    }
    this.nbpSetUpComponent();
  }

  nbpChangeOldToNewPasswordSubmit() {
    // if (this.nbpAuth.changePassword.oldPassword !== this.nbpGeneratePasswordErrorMessage) {
    //   this.nbpChangePasswordSuccess = false;
    //   this.nbpChangeOldPasswordErrorMessage = this.nbpChangeOldPasswordErrorMessage;
    // }else
    if (this.nbpAuth.changePassword.newPassword !== this.nbpConfirmPassword) {
      this.nbpChangePasswordSuccess = false;
      this.nbpChangeOldPasswordErrorMessage = "Password don't match !";
    } else {
      const nbpUserRequest = {
        old_password: this.nbpAuth.changePassword.oldPassword,
        new_password: this.nbpAuth.changePassword.newPassword,
      }
      console.log("nbpUserRequest : ", nbpUserRequest);
      this.nbpUserService.NbpChangePasswordService(this.nbpUser.id, nbpUserRequest).subscribe(
        (response: any) => {
          this.nbpLocalStorage.NbpRemoveTokenLocalStorage();
          this.nbpLocalStorage.NbpSetTokenLocalStorage(response);
          console.log("response NbpcChangePasswordService: ", response);
          this.NbpGetUserProfile();
          this.nbpChangePasswordSuccess = true;

        },
        (err) => {
          
      //    this.nbpShowFormUpdateProfile = true;
          this.nbpChangeOldPasswordErrorMessage = err.error.error;
          console.log("response errore: ", err);
        }
      );

      //   console.log("NbpUpdateSubmit: ", this.nbpAuth.profile);
    }
  }

  NbpGetUserProfile() {
    this.nbpToken = this.nbpLocalStorage.NbpGetTokenLocalStorage();
    this.nbpUserService.NbpGetUserService(this.nbpToken).subscribe(
      (response: any) => {
        this.nbpUser = response;
        this.changeOldPasswordToNew = this.nbpUser.temporaryPassword;
        console.log("this users: ",this.nbpUser)
        console.log("changeOldPasswordToNew: ",this.nbpUser.temporaryPassword)
  //      this.nbpUserRoles = response.roles.split(",");
      },
      (err) => {
        if (err.status === 401) {
          this.nbpShowErrorMessage = true;
          this.nbpErrorMessage = err.error;
        }
      }
    );
  }
}
