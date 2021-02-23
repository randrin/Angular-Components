import { Component, Injector, OnInit } from "@angular/core";
import { NbpBaseComponent } from "src/app/components/nbp-base-component/nbp-base.component";
import { NbpAuthService } from "src/app/services/nbp-auth.service";

@Component({
  selector: "nbp-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent extends NbpBaseComponent implements OnInit {
  nbpRegisterSuccess: boolean = false;
  nbpRegisterSuccessMessage: string = "";
  nbpRegisterDisabled: boolean = true;
  nbpRegisterErrorMessage: string = "";
  nbpConfirmPassword: string = "";
  nbpEmailInputModel: any;
  nbpRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(injector: Injector, private nbpAuthService: NbpAuthService) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  nbpSetUpComponent() {
    this.nbpRegisterDisabled =
      !this.nbpAuth.register.userName.length ||
      !this.nbpAuth.register.password.length ||
      !this.nbpAuth.register.email.length ||
      !this.nbpConfirmPassword
        ? true
        : false;
    this.nbpRegisterErrorMessage = "";
  }

  // Functions
  nbpInputModel(event) {
    if (event.name === "username") {
      this.nbpAuth.register.userName = event.value;
    }
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

  nbpLoginSubmit() {
    this.router.navigateByUrl("/login");
  }

  nbpRegisterSubmit() {
    if (this.nbpAuth.register.password !== this.nbpConfirmPassword) {
      this.nbpRegisterSuccess = false;
      this.nbpRegisterErrorMessage =
        "Password and Confirm Password don't mactch.";
    } else {
      if (
        !this.nbpRegex.test(String(this.nbpAuth.register.email).toLowerCase())
      ) {
        this.nbpRegisterSuccess = false;
      } else {
        this.nbpAuthService.NbpRegisterService(this.nbpAuth.register).subscribe(
          (response: any) => {
            this.nbpRegisterSuccess = true;
            this.nbpRegisterSuccessMessage = response.message;
          },
          (err) => {
            console.log("err: ", err);
            this.nbpRegisterErrorMessage = err.error;
          }
        );
      }
    }
  }
}
