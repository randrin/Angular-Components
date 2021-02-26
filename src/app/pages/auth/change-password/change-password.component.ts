import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';
import { NbpAuthService } from 'src/app/services/nbp-auth.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'nbp-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent extends NbpBaseComponent implements OnInit {

  nbpRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  nbpRegisterSuccess: boolean = false;
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
  nbpSwowPasswordSuccess: boolean;

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
    this.nbpRegisterDisabled =
      !this.nbpAuth.forgotPassword.email.length
        ? true
        : false;
    this.nbpRegisterErrorMessage = "";
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
    this.nbpSetUpEmail()
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
      this.nbpRegisterSuccess = false;
      this.nbpRegisterErrorMessage =
        "Password and Confirm Password don't mactch.";
    } else
      if (!this.nbpRegex.test(String(this.nbpAuth.register.email).toLowerCase())
      ) {
        this.nbpRegisterSuccess = false;
        this.nbpRegisterErrorMessage = "Invalid Email !";
      } else {
        let nbpUSerReset = {
          email: this.nbpAuth.register.email,
          password: this.nbpAuth.register.password
        }
        this.nbpAuthService.NbpResetPasswordService(nbpUSerReset).subscribe(
          (response: any) => {
            console.log("NbpResetPasswordService: ", response);
            this.nbpRegisterSuccess = true;
            this.changePassword = false;
            this.nbpRegisterSuccessMessage = "Your Password has been updated successfully!"

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

  nbpShowPassword() {
    const nbpUSerEmail = this.nbpAuth.forgotPassword.email;
    if (!this.nbpRegex.test(String(this.nbpAuth.forgotPassword.email).toLowerCase())) {
      this.nbpRegisterSuccess = false;
      this.nbpRegisterErrorMessage = "Invalid Email !";
    } else {
      this.nbpAuthService.NbpSearchForgottenPasswordService(nbpUSerEmail).subscribe(
        (response: any) => {
          console.log("NbpforgotPasswordService: " ,response);
          this.nbpSwowPasswordSuccess = true;
          this.changePassword = false; 
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