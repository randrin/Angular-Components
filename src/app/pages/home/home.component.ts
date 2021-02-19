import { Component, Injector, OnInit } from "@angular/core";
import { NbpBaseComponent } from "src/app/components/nbp-base-component/nbp-base.component";
import { NbpUser } from "src/app/models/user/nbpUser";
import { NbpAuthService } from "src/app/services/nbp-auth.service";
import { NbpLocalStorage } from "src/app/utils/nbp-local-storage";

@Component({
  selector: "nbp-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent extends NbpBaseComponent implements OnInit {

  title = "Welcoem to Nbp";
  token: string = "";
  nbpErrorMessage: string = "";
  nbpShowErrorMessage: boolean = false;
  nbpUserRoles: [] = [];

  constructor(
    injector: Injector,
    private nbpAuthService: NbpAuthService,
    nbpLocalStorage: NbpLocalStorage
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  nbpSetUpComponent() {
    this.NbpGetProfileUSer();
  }

  // Functions
  NbpGetProfileUSer() {
    this.token = this.nbpLocalStorage.NbpGetTokenLocalStorage();
    this.nbpAuthService.NbpUserProfileService(this.token).subscribe(
      (response: any) => {
        this.nbpUser = response;
        this.nbpUserRoles = response.roles.split(",");
        console.log("User: ", this.nbpUser);
      },
      (err) => {
        console.log("Err: ", err);
        if (err.status === 401) {
          this.nbpShowErrorMessage = true;
          this.nbpErrorMessage = err.error.error;
        }
      }
    );
  }

  NbpOnLogout() {
    this.nbpLocalStorage.NbpRemoveTokenLocalStorage();
    this.nbpUser = new NbpUser(0, "", "", "", false, "");
    this.router.navigateByUrl("/login");
  }
}
