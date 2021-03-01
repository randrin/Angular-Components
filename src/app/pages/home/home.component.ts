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
  nbpTitle = "Welcome to Nbp Aplication";
  nbpTitleUser = "All users in Nbp System";
  nbpUpdateUser = "Update user in Nbp System";

  nbpPasswordrDisabled: boolean = true;
  nbpChangePasswordSuccess:boolean = false;
  changeOldPasswordToNew:boolean = false;
  nbpRegisterSuccess:boolean = false;
  nbpErrorMessage: string = "";
  nbpShowErrorMessage: boolean = false;
  nbpShowFormUpdateProfile: boolean = false;
  nbpUpdateDisabled: boolean = true;
  nbpUpdateErrorMessage: string = "";
  nbpRegisterErrorMessage: string = "";
  nbpLoading: boolean = false;
  nbpUserRoles: [] = [];
  nbpUsersClone: Array<any> = [];
  nbpHeaders: Array<any> = [
    { label: "ID", name: "ID User" },
    { label: "USERNAME", name: "Username" },
    { label: "EMAIL", name: "Email Adress" },
    { label: "ROLES", name: "Roles" },
    { label: "TEMPORARY-PASSWORD", name: "Temporary-Password"},
    { label: "ISACTIVE", name: "Status" }
  ];
  nbpShowModalAction: boolean = false;
  nbpUpdateSuccess: boolean = false;
  nbpConfirmPassword: any;
  nbpRegisterSuccessMessage: string;

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
    this.nbpToken = this.nbpLocalStorage.NbpGetTokenLocalStorage();
    this.nbpUserService.NbpGetUserService(this.nbpToken).subscribe(
      (response: any) => {
        this.nbpUser = response;
        this.changeOldPasswordToNew = this.nbpUser.temporaryPassword;
        this.nbpUserRoles = response.roles.split(",");
      },
      (err) => {
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

  NbpLoadingUsers() {
    this.NbpGetUsers();
  }

  NbpModalOnClickAction(nbpUser) {
    console.log("Event: ", nbpUser);
    if (nbpUser.action === "delete") {
      this.nbpUserService.NbpDeleteUserService(nbpUser.item.id).subscribe(
        (response: any) => {
          this.nbpUsers = this.nbpUsers.filter(
            (elt) => elt.userName !== response.userName
          );
          this.nbpLoading = true;
        },
        (err) => {
          this.nbpShowErrorMessage = true;
          this.nbpErrorMessage = err.error.error;
        }
      );
    }
    if (nbpUser.action === "active" || nbpUser.action === "disactive") {
      this.nbpUserService
        .NbpActivateOrDisableUserService(nbpUser.item.id)
        .subscribe(
          (response: any) => {
            console.log(
              "NbpActivateOrDisableUserService -> response: ",
              response
            );
            this.NbpLoadingUsers();
          },
          (err) => {
            console.log("NbpActivateOrDisableUserService -> err: ", err);
            this.nbpShowErrorMessage = true;
            this.nbpErrorMessage = err.error.error;
          }
        );
    }
  }

  nbpInputModel(event) {
    if (event.name === "username") {
      this.nbpAuth.profile.userName = event.value;
    }
    if (event.name === "email") {
      this.nbpAuth.profile.email = event.value;
    }
    this.nbpCheckValidationForm();
  }

  nbpCheckValidationForm() {
    this.nbpUpdateDisabled =
      !this.nbpAuth.profile.userName.length ||
      !this.nbpAuth.profile.email.length
        ? true
        : false;
    this.nbpUpdateErrorMessage = "";
  }

  NbpOnUpdateProfile() {
    console.log("this.nbpUser login: ", this.nbpUser);
    this.nbpShowFormUpdateProfile = true;
    this.nbpCheckValidationForm();
  }

  NbpOnLogout() {
    this.nbpLocalStorage.NbpRemoveTokenLocalStorage();
    this.nbpUser = new NbpUser(0, "", "", "", false, "", false);
    this.router.navigateByUrl("/login");
  }

  NbpAbortSubmit() {
    this.nbpShowFormUpdateProfile = false;
  }

  NbpUpdateSubmit() { 
    if (
      !this.nbpRegex.test(String(this.nbpAuth.profile.email).toLowerCase())
    ) {
      this.nbpUpdateErrorMessage = "Invalid Email Address !";
    } else {
      const nbpUserRequest = {
        userName: this.nbpAuth.profile.userName,
        email: this.nbpAuth.profile.email
      }
      this.nbpUserService.NbpUpdateUserService(this.nbpUser.id, nbpUserRequest).subscribe(
        (response: any) => {
          this.nbpLocalStorage.NbpRemoveTokenLocalStorage();
          this.nbpLocalStorage.NbpSetTokenLocalStorage(response);
          console.log("response NbpUpdateUserService: ", response);
          this.NbpGetUserProfile();
          this.nbpShowFormUpdateProfile = false;
          this.nbpRegisterSuccessMessage = response.message;
        },
        (err) => {
          console.log("err: ", err);
          this.nbpShowFormUpdateProfile = true;
          this.nbpUpdateErrorMessage = err.error.error;
        }
      );
    }
    console.log("NbpUpdateSubmit: ", this.nbpAuth.profile);
  }

}
