import { Component, Injector, OnInit } from "@angular/core";
import { NbpBaseComponent } from "src/app/components/nbp-base-component/nbp-base.component";
import { NbpAuthService } from "src/app/services/nbp-auth.service";
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

  constructor(injector: Injector, private nbpAuthService: NbpAuthService, nbpLocalStorage: NbpLocalStorage) {
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
      (response) => {
        this.nbpLocalStorage.NbpSetTokenLocalStorage(response);
        this.router.navigateByUrl("/home");
      },
      (err) => {
        console.log("err: ", err);
        if (err.status === 401) {
          this.nbpLoginErrorType = this._alert.WARNING;
        } else {
          this.nbpLoginErrorType = this._alert.ERROR;
        }
        this.nbpLoginErrorMessage = err.error.message;
      }
    );
  }

  nbpRegisterSubmit() {
    this.router.navigateByUrl("/register");
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
