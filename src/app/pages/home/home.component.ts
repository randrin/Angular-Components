import { Component, Injector, OnInit } from "@angular/core";
import { NbpBaseComponent } from "src/app/components/nbp-base-component/nbp-base.component";
import { NbpUser } from "src/app/models/user/nbpUser";
import { NbpUserService } from "src/app/services/nbp-user.service";
import { NbpLocalStorage } from "src/app/utils/nbp-local-storage";

@Component({
  selector: "nbp-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent extends NbpBaseComponent implements OnInit {
  title = "Welcoem to Nbp";
  titleUser = "All users in Nbp System";

  token: string = "";
  nbpErrorMessage: string = "";
  nbpShowErrorMessage: boolean = false;
  nbpUserRoles: [] = [];
  nbpHeaders: Array<any> = [
    { label: "ID", name: "ID User" },
    { label: "USERNAME", name: "Username" },
    { label: "EMAIL", name: "Email Adress" },
    { label: "ROLES", name: "Roles" },
    { label: "ISACTIVE", name: "Status" },
  ];

  constructor(
    injector: Injector,
    private nbpUserService: NbpUserService,
    nbpLocalStorage: NbpLocalStorage
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  nbpSetUpComponent() {
    this.NbpGetProfileUser();
    this.NbpGetUsers();
  }

  // Functions
  NbpGetProfileUser() {
    this.token = this.nbpLocalStorage.NbpGetTokenLocalStorage();
    this.nbpUserService.NbpGetUserService(this.token).subscribe(
      (response: any) => {
        this.nbpUser = response;
        this.nbpUserRoles = response.roles.split(",");
      },
      (err) => {
        if (err.status === 401) {
          this.nbpShowErrorMessage = true;
          this.nbpErrorMessage = err.error.error;
        }
      }
    );
  }

  NbpGetUsers() {
    this.nbpUserService.NbpGetUsersService().subscribe(
      (response: any) => {
        this.nbpUsers = response;
        console.log('this.nbpUsers: ', this.nbpUsers)
      },
      (err) => {
        this.nbpShowErrorMessage = true;
        this.nbpErrorMessage = err.error.error;
      }
    );
  }

  NbpOnLogout() {
    this.nbpLocalStorage.NbpRemoveTokenLocalStorage();
    this.nbpUser = new NbpUser(0, "", "", "", false, "");
    this.router.navigateByUrl("/login");
  }
}
