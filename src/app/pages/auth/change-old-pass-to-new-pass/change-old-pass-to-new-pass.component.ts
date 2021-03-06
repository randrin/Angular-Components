import { Component, Injector, OnInit } from "@angular/core";
import { NbpBaseComponent } from "src/app/components/nbp-base-component/nbp-base.component";
import { NbpAuthService } from "src/app/services/nbp-auth.service";
import { NbpUserService } from "src/app/services/nbp-user.service";
import { NbpLocalStorage } from "src/app/utils/nbp-local-storage";

@Component({
  selector: "nbp-change-old-pass-to-new-pass",
  templateUrl: "./change-old-pass-to-new-pass.component.html",
  styleUrls: ["./change-old-pass-to-new-pass.component.scss"],
})
export class ChangeOldPassToNewPassComponent extends NbpBaseComponent implements OnInit {
  nbpPasswordDisabled: boolean = true;
  nbpChangePasswordSuccess: boolean = false;
  nbpOldPasswordToNewPasswordSuccess: boolean = false;
  nbpErrorMessage: string = "";
  nbpShowErrorMessage: boolean = false;
  nbpUpdateDisabled: boolean = true;
  nbpChangeOldPasswordErrorMessage: string = "";
  changeOldPasswordToNew: boolean;
  nbpRegisterErrorMessage: string = "";
  nbpConfirmPassword: string = "";
  nbpGeneratePasswordErrorMessage: string;
  nbpOldPassword: string = "";

  constructor(
    injector: Injector,
    private nbpUserService: NbpUserService,
    private nbpAuthService: NbpAuthService,
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
    this.nbpChangeOldPasswordErrorMessage = "";
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

  nbpChangePasswordSubmit() {
    if (this.nbpAuth.changePassword.newPassword !== this.nbpConfirmPassword) {
      this.nbpChangePasswordSuccess = false;
      this.nbpChangeOldPasswordErrorMessage =
        "New and Confirm Password don't match !";
    } else {
      const nbpUserRequest = {
        oldPassword: this.nbpAuth.changePassword.oldPassword,
        newPassword: this.nbpAuth.changePassword.newPassword,
      };
      console.log("response NbpcChangePasswordService: ", this.nbpAuthService.nbpUser.id);
      this.nbpUserService.NbpChangePasswordService(this.nbpAuthService.nbpUser.id, nbpUserRequest).subscribe(
        (response: any) => {
           this.nbpChangePasswordSuccess = true;
           this.nbpChangeOldPasswordErrorMessage = response.message;
      
        },
        (err) => {
          this.nbpChangeOldPasswordErrorMessage = err.error;
        }
      );
    }
  }

  // NbpGetUserProfile() {
  //   this.nbpToken = this.nbpLocalStorage.NbpGetTokenLocalStorage();
  //   this.nbpUserService.NbpGetUserService(this.nbpToken).subscribe(
  //     (response: any) => {
  //       this.nbpUser = response;
  //       this.changeOldPasswordToNew = this.nbpUser.temporaryPassword;
  //       console.log("this users: ", this.nbpUser);
  //       console.log("changeOldPasswordToNew: ", this.nbpUser.temporaryPassword);
  //       //      this.nbpUserRoles = response.roles.split(",");
  //     },
  //     (err) => {
  //       if (err.status === 401) {
  //         this.nbpShowErrorMessage = true;
  //         this.nbpErrorMessage = err.error;
  //       }
  //     }
  //   );
  // }
}
