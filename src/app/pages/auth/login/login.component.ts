import { Component, Injector, OnInit } from "@angular/core";
import { NbpBaseComponent } from "src/app/components/nbp-base-component/nbp-base.component";
import { NbpAuthService } from "src/app/services/nbp-auth.service";

@Component({
  selector: "nbp-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent extends NbpBaseComponent implements OnInit {
  nbpLoginDisabled: boolean = true;
  nbpLoginErrorMessage: string = "";

  constructor(injector: Injector, private nbpAuthService: NbpAuthService) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  nbpSetUpComponent() {
    this.nbpLoginDisabled =
      !this.nbpLogin.userName.length || !this.nbpLogin.password.length
        ? true
        : false;
    this.nbpLoginErrorMessage = "";
  }

  // Functions
  nbpLoginSubmit() {
    this.nbpAuthService.NbpLoginService(this.nbpLogin).subscribe(
      (response) => {
        console.log("response: ", response);
        localStorage.setItem("jwtToken", JSON.stringify(response));
        this.router.navigateByUrl("/home");
      },
      (err) => {
        console.log("err: ", err);
        this.nbpLoginErrorMessage = err.error.message;
      }
    );
  }

  nbpRegisterSubmit() {
    this.router.navigateByUrl("/register");
  }

  nbpInputTextModel(event) {
    this.nbpLogin.userName = event;
    this.nbpSetUpComponent();
  }

  nbpInputPasswordModel(event) {
    this.nbpLogin.password = event;
    this.nbpSetUpComponent();
  }
}
