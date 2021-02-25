import { Component, Injector, OnInit } from "@angular/core";
import { NbpBaseComponent } from "src/app/components/nbp-base-component/nbp-base.component";
import { NbpUser } from "src/app/models/user/nbpUser";
import { NbpUsers } from "src/app/models/user/nbpUsers";
import { NbpUserService } from "src/app/services/nbp-user.service";
import { NbpLocalStorage } from "src/app/utils/nbp-local-storage";

@Component({
  selector: "nbp-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent extends NbpBaseComponent implements OnInit {
  title = "Welcome to Nbp Aplication";
  titleUser = "All users in Nbp System";

  token: string = "";
  nbpErrorMessage: string = "";
  nbpShowErrorMessage: boolean = false;
  nbpLoading: boolean = false;
  nbpUserRoles: [] = [];
  nbpUsersClone: Array<any> = [];
  nbpHeaders: Array<any> = [
    { label: "ID", name: "ID User" },
    { label: "USERNAME", name: "Username" },
    { label: "EMAIL", name: "Email Adress" },
    { label: "ROLES", name: "Roles" },
    { label: "ISACTIVE", name: "Status" },
  ];
  nbpShowModalAction: boolean = false;

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
    this.NbpGetUserProfile();
    this.NbpGetUsers();
  }

  // Functions
  NbpGetUserProfile() {
    this.token = this.nbpLocalStorage.NbpGetTokenLocalStorage();
    this.nbpUserService.NbpGetUserService(this.token).subscribe(
      (response: any) => {
        this.nbpUser = response;
        this.nbpUserRoles = response.roles.split(",");
      },
      (err) => {
        console.log("Err: ", err);
        if (err.status === 401) {
          this.nbpShowErrorMessage = true;
          this.nbpErrorMessage = err.error;
        }
      }
    );
  }

  NbpGetUsers() {
    this.nbpShowErrorMessage = false;
    this.nbpUserService.NbpGetUsersService().subscribe(
      (response: any) => {
        this.nbpUsers = response;
        this.NbpGetUsersPermissions();
      },
      (err) => {
        this.nbpShowErrorMessage = true;
        this.nbpErrorMessage = err.error.error;
      }
    );
  }

  NbpGetUsersPermissions() {
    this.nbpUsers.forEach((nbpUser) => {
      if (nbpUser.userName !== this.nbpUser.userName) {
        this.nbpUsersClone.push({
          ...nbpUser,
          permissions: this.nbpUsersPermissions,
        });
      }
    });
    this.nbpUsers = this.nbpUsersClone;
    this.nbpLoading = true;
    console.log("this.nbpUsers: ", this.nbpUsers);
    console.log("this.nbpUsersClone: ", this.nbpUsersClone);
  }

  NbpModalOnClickAction(nbpUser) {
    console.log("Event: ", nbpUser);
    if (nbpUser.action === "delete") {
      this.nbpUserService.NbpDeleteUserService(nbpUser.item.id).subscribe(
        (response: any) => {
          console.log("NbpDeleteUserService -> response: ", response);
          this.nbpUsers = this.nbpUsers.filter(elt => elt.userName !== response.userName);
          console.log("NbpDeleteUserService -> this.nbpUsers: ", this.nbpUsers);
          this.nbpLoading = true;
        },
        (err) => {
          console.log("NbpDeleteUserService -> err: ", err);
          this.nbpShowErrorMessage = true;
          this.nbpErrorMessage = err.error.error;
        }
      );
    }
    if (nbpUser.action === "active" || nbpUser.action === "disactive") {
      this.nbpUserService
        .NbpActivateOrDisableUserService(nbpUser.item.id)
        .subscribe(
          (response) => {
            console.log(
              "NbpActivateOrDisableUserService -> response: ",
              response
            );
            this.NbpGetUsers();
          },
          (err) => {
            console.log("NbpActivateOrDisableUserService -> err: ", err);
            this.nbpShowErrorMessage = true;
            this.nbpErrorMessage = err.error.error;
          }
        );
    }
  }

  NbpOnLogout() {
    this.nbpLocalStorage.NbpRemoveTokenLocalStorage();
    this.nbpUser = new NbpUser(0, "", "", "", false, "");
    this.router.navigateByUrl("/login");
  }
}
