import {
  Component,
  EventEmitter,
  Injector,
  OnInit,
  Output,
} from "@angular/core";
import { NbpBaseComponent } from "src/app/components/nbp-base-component/nbp-base.component";
import { NbpAuthService } from "src/app/services/nbp-auth.service";

@Component({
  selector: "nbp-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent
  extends NbpBaseComponent
  implements OnInit {
  nbpChangePasswordSuccess: boolean = false;
  changePassword: boolean = false;
  findPassword: boolean = true;
  nbpRegisterDisabled: boolean = true;
  nbpEmailDisabled: boolean = true;
  nbpLoginErrorMessage: string = "";
  nbpLoginErrorType: string = "";
  nbpRegisterErrorMessage: string = "";
  nbpConfirmPassword: string = "";
  nbpEmailInputModel: any;
  nbpRegisterSuccessMessage: any;
  nbpShowPasswordSuccess: boolean;
  nbpPermanentPassword: string = "";

  constructor(injector: Injector, private nbpAuthService: NbpAuthService) {
    super(injector);
  }

  nbpSetUpComponent() {
    this.nbpRegisterDisabled =
      !this.nbpAuth.register.password.length ||
      !this.nbpAuth.register.email.length ||
      !this.nbpConfirmPassword
        ? true
        : false;
    this.nbpRegisterErrorMessage = "";
  }

  nbpSetUpEmail() {
    this.nbpRegisterDisabled = !this.nbpAuth.forgotPassword.email.length
      ? true
      : false;
    this.nbpRegisterErrorMessage = "";
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
    this.nbpSetUpEmail();
  }

  nbpGoBackToLogin() {
    this.router.navigateByUrl("/login");
  }

  nbpChangePassword() {
    this.changePassword = true;
    this.findPassword = false;
    this.router.navigateByUrl("/manage-password");
  }

  // Functions
  nbpInputModel(event) {
    if (event.name === "password") {
      this.nbpAuth.register.password = event.value;
    }
    if (event.name === "email") {
      this.nbpAuth.register.email = event.value;
    }
    if (event.name === "confirmPassword") {
      this.nbpConfirmPassword = event.value;
    }
    this.nbpSetUpComponent();
  }

  nbpInputModelEmail(event) {
    if (event.name === "email") {
      this.nbpAuth.forgotPassword.email = event.value;
      this.nbpSetUpEmail();
    }
  }

  nbpInputModelEmails(event) {
    this.nbpInputModelEmail(event);
  }

  nbpInputModels(event) {
    this.nbpInputModel(event);
  }

  nbpChangePasswordSubmit() {
    if (this.nbpAuth.register.password !== this.nbpConfirmPassword) {
      this.nbpChangePasswordSuccess = false;
      this.nbpRegisterErrorMessage =
        "Password and Confirm Password don't mactch.";
    } else if (
      !this.nbpRegex.test(String(this.nbpAuth.register.email).toLowerCase())
    ) {
      this.nbpChangePasswordSuccess = false;
      this.nbpRegisterErrorMessage = "Invalid Email !";
    } else {
      const nbpUserReset = {
        email: this.nbpAuth.register.email,
        password: this.nbpAuth.register.password,
      };
      this.nbpAuthService.NbpResetPasswordService(nbpUserReset).subscribe(
        (response: any) => {
          console.log("NbpResetPasswordService: ", response);
          this.nbpChangePasswordSuccess = true;
          this.changePassword = false;
          this.nbpRegisterSuccessMessage = response.message;
        },
        (err) => {
          console.log("err: ", err);
          if (err.status === 401) {
            this.nbpLoginErrorType = this._alert.WARNING;
          } else {
            this.nbpLoginErrorType = this._alert.ERROR;
          }
          this.nbpRegisterErrorMessage = err.error;
        }
      );
    }
  }

  nbpShowPassword() {
    const nbpUserEmail = this.nbpAuth.forgotPassword.email;
    if (
      !this.nbpRegex.test(
        String(this.nbpAuth.forgotPassword.email).toLowerCase()
      )
    ) {
      this.nbpChangePasswordSuccess = false;
      this.nbpRegisterErrorMessage = "Invalid Email !";
    } else {
      this.nbpAuthService
        .NbpSearchForgottenPasswordService(nbpUserEmail)
        .subscribe(
          (response: any) => {
            console.log("NbpforgotPasswordService: ", response);
            this.nbpChangePasswordSuccess = true;
            // this.changePassword = false;
            this.nbpRegisterSuccessMessage = response.message;
            this.nbpPermanentPassword =
              "Your temporal password: " + response.object;
          },
          (err) => {
            console.log("err: ", err);
            if (err.status === 401) {
              this.nbpLoginErrorType = this._alert.WARNING;
            } else {
              this.nbpLoginErrorType = this._alert.ERROR;
            }
            this.nbpLoginErrorMessage = err.error;
          }
        );
    }
  }
}
