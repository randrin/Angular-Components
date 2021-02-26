import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';
import { NbpAuthService } from 'src/app/services/nbp-auth.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent extends NbpBaseComponent implements OnInit {
  @Output() nbpInputModel: EventEmitter<object> = new EventEmitter<object>();

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
    if (this.nbpRegex.test(String(this.nbpAuth.register.email).toLowerCase())) {
      this.nbpEmailDisabled = false;
    }
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
    this.nbpSetUpEmail
  }


  nbpGoBackToLogin() {
    this.router.navigateByUrl("/login");
  }

  nbpChangePassword() {
    this.changePassword = true;
    this.findPassword = false;
    this.router.navigateByUrl("/manage-password");
  }

  nbpInputModels(){
    this.nbpInputModel.emit();
  }

  nbpEmailSubmit() {
    this.nbpAuthService.NbpLoginService(this.nbpAuth.register.email).subscribe(
      (response) => {
        console.log(response)
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
