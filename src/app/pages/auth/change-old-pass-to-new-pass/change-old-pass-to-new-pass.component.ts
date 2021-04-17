import { Component, Injector, OnInit } from "@angular/core";
import { NbpBaseComponent } from "src/app/components/nbp-base-component/nbp-base.component";
import { NbpUser } from "src/app/models/user/nbpUser";
import { NbpAuthService } from "src/app/services/nbp-auth.service";
import { NbpUserService } from "src/app/services/nbp-user.service";
import { NbpLocalStorage } from "src/app/utils/nbp-local-storage";
import * as uuid from 'uuid';

@Component({
  selector: "nbp-change-old-pass-to-new-pass",
  templateUrl: "./change-old-pass-to-new-pass.component.html",
  styleUrls: ["./change-old-pass-to-new-pass.component.scss", "../../../components/nbp-modals/nbp-modal-two/nbp-modal-two.component.scss"],
})
export class ChangeOldPassToNewPassComponent
  extends NbpBaseComponent
  implements OnInit {
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
  modalName: string;
  nbpModalStatic: string = 'static';
  nbpTableTextHeader: string = "";
  nbpTableTextBody: string = "";
  nbpModalSizePosition: string;

  constructor(
    injector: Injector,
    private nbpUserService: NbpUserService,
    private nbpAuthService: NbpAuthService,
    nbpLocalStorage: NbpLocalStorage
  ) {
    super(injector);
    this.NbpGetUserProfile();
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  NbpGetUserProfile() {
    this.nbpToken = this.nbpLocalStorage.NbpGetTokenLocalStorage();
    this.nbpUserService.NbpGetUserService(this.nbpToken).subscribe(
      (response: NbpUser) => {
        this.nbpAuthService.nbpUser = response;
      },
      (err) => {
        if (err.status === 401) {
          this.nbpShowErrorMessage = true;
          this.nbpErrorMessage = err.error;
        }
      }
    );
  }

  nbpSetUpComponent() {
    this.nbpPasswordDisabled =
      !this.nbpAuth.changePassword.oldPassword.length ||
      !this.nbpAuth.changePassword.newPassword.length ||
      !this.nbpConfirmPassword
        ? true
        : false;
    // To remove the alert message when the user digit into the input
    this.nbpChangeOldPasswordErrorMessage = "";
    this.nbpCheckPassword = false;
    this.nbpCheckPasswordErrorMessage = "";
    this.modalName = 'nbp' + uuid.v4();
    this.nbpModalSizePosition = this.nbpGetModalPositionClasse(this._position.CENTER) + this.nbpSeparator + this.nbpGetSizeModalClasse(this._size.MD);
    this.nbpTableTextHeader = "Logout Confirmation"
    this.nbpTableTextBody = "Are you sure you want to leave Nbp System ?"
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
        "New and Confirm Password don't match. Try again !!!";
    } else if (
      this.nbpAuth.changePassword.newPassword ===
      this.nbpAuth.changePassword.oldPassword
    ) {
      this.nbpChangePasswordSuccess = false;
      this.nbpChangeOldPasswordErrorMessage =
        "New and Old Password must be different. Try again !!!";
    } else {
      if (this.nbpValidatePassword(this.nbpAuth.changePassword.newPassword)) {
        this.nbpCheckPassword = true;
      } else {
        const nbpUserRequest = {
          oldPassword: this.nbpAuth.changePassword.oldPassword,
          newPassword: this.nbpAuth.changePassword.newPassword,
        };
        this.nbpUserService
          .NbpChangePasswordService(
            this.nbpAuthService.nbpUser.id,
            nbpUserRequest
          )
          .subscribe(
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
  }

  nbpOnAbortPasswordSubmit() {
    this.nbpLocalStorage.NbpRemoveTokenLocalStorage();
    // this.nbpAuthService.nbpUser = new NbpUser(0, "", "", "", false, "", false);
    this.router.navigateByUrl("/login");
  }
}
