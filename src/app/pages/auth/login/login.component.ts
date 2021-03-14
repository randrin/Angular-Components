import { Component, Injector, OnInit } from "@angular/core";
import { NbpBaseComponent } from "src/app/components/nbp-base-component/nbp-base.component";
import { NbpUser } from "src/app/models/user/nbpUser";
import { NbpAuthService } from "src/app/services/nbp-auth.service";
import { NbpUserService } from "src/app/services/nbp-user.service";
import { NbpLocalStorage } from "src/app/utils/nbp-local-storage";

@Component({
  selector: "nbp-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent extends NbpBaseComponent implements OnInit {

  nbpLoginDisabled: boolean = true;
  nbpLoginErrorMessage: string = "";
  nbpLoginErrorType: string = "";
  nbpShowErrorMessage: boolean = false;
  nbpErrorMessage: boolean = false;

  constructor(injector: Injector,
    private nbpAuthService: NbpAuthService, 
    private nbpUserService: NbpUserService, 
    nbpLocalStorage: NbpLocalStorage) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  nbpSetUpComponent() {
    this.nbpLoginDisabled =
      !this.nbpAuth.login.userName.length || !this.nbpAuth.login.password.length
        ? true
        : false;
    this.nbpLoginErrorMessage = "";
  }


  // Functions
  nbpLoginSubmit() {
    this.nbpAuthService.NbpLoginService(this.nbpAuth.login).subscribe(
      (response: NbpUser) => {
        this.nbpLocalStorage.NbpSetTokenLocalStorage(response);
        this.NbpGetUserProfile();
        this.router.navigateByUrl("/home");
      },
      (err) => {
        if (err.status === 401) {
          this.nbpLoginErrorType = this._alert.WARNING;
        } else {
          this.nbpLoginErrorType = this._alert.ERROR;
        }
        this.nbpLoginErrorMessage = err.error;
      }
    );
  }

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

  nbpRegisterSubmit() {
    this.router.navigateByUrl("/register");
  }

  nbpLookPassword() {
    this.router.navigateByUrl("/manage-password");
  }

  nbpInputModel(event) {
    if(event.name === "username") {
      this.nbpAuth.login.userName = event.value;
    }
    if(event.name === "password") {
      this.nbpAuth.login.password = event.value;
    }
    this.nbpSetUpComponent();
  }
}
