import { Component, Injector, OnInit } from "@angular/core";
import * as moment from "moment";
import { NbpBaseComponent } from "src/app/components/nbp-base-component/nbp-base.component";
import { NbpUser } from "src/app/models/user/nbpUser";
import { NbpAuthService } from "src/app/services/nbp-auth.service";
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
  nbpChangePasswordSuccess: boolean = false;
  nbpChangeOldPasswordToNew: boolean = false;
  nbpErrorMessage: string = "";
  nbpShowErrorMessage: boolean = false;
  nbpShowFormUpdateProfile: boolean = false;
  nbpUpdateDisabled: boolean = true;
  nbpUpdateErrorMessage: string = "";
  nbpRegisterErrorMessage: string = "";
  nbpTitleLastConnexion: string = "";
  nbpLoading: boolean = false;
  nbpUserRoles: Array<any> = [];
  nbpUsersClone: Array<any> = [];
  nbpHeaders: Array<any> = [
    { label: "ID", name: "User ID" },
    { label: "USERNAME", name: "Username" },
    { label: "EMAIL", name: "Email Address" },
    { label: "ACTIVE", name: "Status" },
    { label: "TEMPORARY-PASSWORD", name: "Temporary Password" },
    { label: "LAST-CONNEXION", name: "Last Connexion" },
  ];
  nbpShowModalAction: boolean = false;
  nbpUpdateSuccess: boolean = false;
  nbpConfirmPassword: any;

  constructor(
    injector: Injector,
    private nbpUserService: NbpUserService,
    private nbpAuthService: NbpAuthService,
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
      (response: NbpUser) => {
        this.nbpAuthService.nbpUser = response;
        this.nbpUser = this.nbpAuthService.nbpUser;
        this.nbpChangeOldPasswordToNew = response.temporaryPassword;
        this.nbpTitleLastConnexion = moment(this.nbpUser.lastConnexion).format("LLLL");
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
      (response: Array<NbpUser>) => {
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
      if (nbpUser.userName !== this.nbpAuthService.nbpUser.userName) {
        const user = this.NbpUserValues(nbpUser);
        this.nbpUsersClone.push({
          ...user,
          permissions: this.nbpUsersPermissions,
        });
      }
    });
    this.nbpUsers = this.nbpUsersClone;
    this.nbpLoading = true;
    console.log("this.nbpUsers: ", this.nbpUsers);
    console.log("this.nbpUsersClone: ", this.nbpUsersClone);
  }

  NbpUserValues(nbpUser: NbpUser) {
    return {
      userId: nbpUser.userId,
      userName: nbpUser.userName,
      email: nbpUser.email,
      active: nbpUser.active,
      temporaryPassword: nbpUser.temporaryPassword,
      lastConnexion: moment(nbpUser.lastConnexion).format('DD/MM/y'),
    };
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
          (response: NbpUser) => {
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
    this.nbpShowFormUpdateProfile = true;
    this.nbpCheckValidationForm();
  }

  NbpProfileOnBtnAction(event) {
    if (event === 'exit') {
      this.NbpOnLogout();
    }
    if (event === 'update') {
      this.NbpOnUpdateProfile();
    }
  }

  NbpPatient() {
    this.router.navigateByUrl("/patients");
  }

  NbpOnLogout() {
    this.nbpLocalStorage.NbpRemoveTokenLocalStorage();
    // this.nbpAuthService.nbpUser = new NbpUser(0, "", "", "", false, "", false);
    this.router.navigateByUrl("/login");
  }

  NbpAbortSubmit() {
    this.nbpShowFormUpdateProfile = false;
  }

  NbpUpdateSubmit() {
    if (!this.nbpRegex.test(String(this.nbpAuth.profile.email).toLowerCase())) {
      this.nbpUpdateErrorMessage = "Invalid Email Address !";
    } else {
      const nbpUserRequest = {
        userName: this.nbpAuth.profile.userName,
        email: this.nbpAuth.profile.email,
      };
      this.nbpUserService
        .NbpUpdateUserService(this.nbpAuthService.nbpUser.id, nbpUserRequest)
        .subscribe(
          (response: any) => {
            this.nbpLocalStorage.NbpRemoveTokenLocalStorage();
            this.nbpLocalStorage.NbpSetTokenLocalStorage(response);
            this.NbpGetUserProfile();
            this.nbpShowFormUpdateProfile = false;
            this.nbpUpdateSuccessMessage = response.message;
            setTimeout(() => {
              this.nbpUpdateSuccessMessage = "";
            }, 3000);
          },
          (err) => {
            this.nbpShowFormUpdateProfile = true;
            this.nbpUpdateErrorMessage = err.error.error;
          }
        );
    }
  }
}
