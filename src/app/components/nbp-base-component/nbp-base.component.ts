import { Component, Injector, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Model } from "src/app/models/model";
import { NbpUser } from "src/app/models/user/nbpUser";
import { NbpLocalStorage } from "src/app/utils/nbp-local-storage";
import {
  NbpBorderClasse,
  NbpTextTransformClasse,
  NbpBackgroundClasse,
  NbpColorClasse,
  NbpIconClasse,
  NbpBorderColorClasse,
  NbpBadgeStyleClasse,
  NbpBadgeOutlineStyleClasse,
  NbpFontSizeClasse,
  NbpDisplayClasse,
  NbpCheckBoxStyleClasse,
  NbpOpacityClasse,
  NbpCursorClasse,
  NbpRadioStyleClasse,
  NbpTextAlignClasse,
  NbpPanelTitlePositionClasse,
  NbpButtonSizeClasse,
  NbpButtonStyleClasse,
  NbpBorderTopClasse,
  NbpBorderLeftClasse,
  NbpSizeModalClasse,
  NbpModalPositionClasse,
  NbpTabbarPositionClasse,
  NbpTabbarTypeClasse,
  NbpSwitchSizeClasse,
  NbpRadioBorderClasse,
} from "src/assets/utils/nbp-commons/nbp-commons.classes";
import {
  NbpAlertType,
  NbpCtaType,
  NbpPipe,
  NbpSize,
  NbpStyle,
  NbpFontSize,
  NbpType,
  NbpModalPosition,
  NbpTooltipType,
  NbpTooltipPosition,
  NbpTooltipTheme,
  NbpTabbarPosition,
  NbpTabbarType,
} from "src/assets/utils/nbp-commons/nbp-commons.enums";

@Component({
  selector: "nbp-base",
  templateUrl: "./nbp-base.component.html",
  styleUrls: ["./nbp-base.component.scss"],
})
export class NbpBaseComponent implements OnInit {
  router: Router;
  activatedRoute: ActivatedRoute;
  nbpCheckPassword: boolean = false;
  nbpCheckPasswordErrorMessage: string = "";
  nbpCheckPasswordLenghtErrorMessage: string =
    "Password must be have minimun lenght of 8 and max 32";
  nbpCheckPasswordUppercaseErrorMessage: string =
    "Password must be have least one uppercase";
  nbpCheckPasswordLowercaseErrorMessage: string =
    "Password must be have least one lowercase";
  nbpCheckPasswordNumberErrorMessage: string =
    "Password must be have least one number";
  nbpCheckPasswordSpecialCharacterErrorMessage: string =
    "Password must be have least one special character";
  nbpLocalStorage = new NbpLocalStorage();
  nbpUser: NbpUser;
  nbpUsers: Array<NbpUser> = [];
  nbpPermission = {
    EDIT: "edit",
    DELETE: "delete",
    CREATE: "create",
    UPDATE: "update",
    VIEW: "view",
    ACTIVE: "active",
    DISABLE: "disactive",
  };
  nbpUsersPermissions = [
    { permission: this.nbpPermission.EDIT, status: true },
    { permission: this.nbpPermission.DELETE, status: true },
    { permission: this.nbpPermission.CREATE, status: true },
    { permission: this.nbpPermission.UPDATE, status: true },
    { permission: this.nbpPermission.VIEW, status: true },
    { permission: this.nbpPermission.ACTIVE, status: true },
    { permission: this.nbpPermission.DISABLE, status: true },
  ];

  _alertType = NbpAlertType;
  _style = NbpStyle;
  _fontSize = NbpFontSize;
  _pipe = NbpPipe;
  _size = NbpSize;
  _ctaType = NbpCtaType;
  _feedbackType = NbpAlertType;
  _alert = NbpAlertType;
  _type = NbpType;
  _position = NbpModalPosition;
  _tooltipPosition = NbpTooltipPosition;
  _tabbarPosition = NbpTabbarPosition;
  _tabbarType = NbpTabbarType;
  _tooltipTheme = NbpTooltipTheme;
  _tooltipType = NbpTooltipType;
  _model = new Model();

  _colorClasse = NbpColorClasse;
  _iconClasse = NbpIconClasse;
  _borderColorClasse = NbpBorderColorClasse;
  _backgroundClasse = NbpBackgroundClasse;
  _borderClasse = NbpBorderClasse;
  _borderTopClasse = NbpBorderTopClasse;
  _borderLeftClasse = NbpBorderLeftClasse;
  _textTransformClasse = NbpTextTransformClasse;
  _badgeStyleClasse = NbpBadgeStyleClasse;
  _badgeOutlineStyleClasse = NbpBadgeOutlineStyleClasse;
  _fontSizeClasse = NbpFontSizeClasse;
  _textAlignClasse = NbpTextAlignClasse;
  _buttonStyleClasse = NbpButtonStyleClasse;
  _buttonSizeClasse = NbpButtonSizeClasse;
  _switchSizeClasse = NbpSwitchSizeClasse;
  _checkBoxStyleClasse = NbpCheckBoxStyleClasse;
  _displayClasse = NbpDisplayClasse;
  _opacityClasse = NbpOpacityClasse;
  _cursorClasse = NbpCursorClasse;
  _radioStyleClasse = NbpRadioStyleClasse;
  _radioBorderClasse = NbpRadioBorderClasse;
  _panelTitlePositionClasse = NbpPanelTitlePositionClasse;
  _sizeModalClasse = NbpSizeModalClasse;
  _positionModalClasse = NbpModalPositionClasse;
  _positionTabbarClasse = NbpTabbarPositionClasse;
  _typeTabbarClasse = NbpTabbarTypeClasse;

  nbpModel: string = "";
  nbpColor: string;
  nbpButton: string;
  nbpBadge: string;
  nbpBackground: string;
  nbpTextarea: string;
  status: boolean;
  nbpTextareaDefault = {
    rows: 8,
  };
  nbpBorder: string;
  nbpSwitch: boolean;
  nbpTextTransform: string;
  nbpFeedbackColor: string;
  nbpAlertBoxType: string;
  nbpAlertBoxIcon: string;
  nbpAlertBoxColor: string;
  nbpAlertBoxBackground: string;
  nbpUpdateDeleteSaveSuccessMessage: string = "";

  nbpRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  nbpSeparator: string = " ";
  nbpTaglia: string = "mb-3";
  nbpToken: string = "";
  nbpAuth = {
    login: {
      userName: "",
      password: "",
    },
    register: {
      userName: "",
      password: "",
      email: "",
    },
    profile: {
      userName: "",
      email: "",
    },
    forgotPassword: {
      email: "",
    },
    changePassword: {
      oldPassword: "",
      newPassword: "",
    },
  };
  nbpPosition = {
    LEFT: "nbp-deep-link-left",
    RIGHT: "nbp-deep-link-right",
  };
  nbpFeedbackIcon = {
    SUCCESS: "fa fa-smile",
    WARNING: "fa fa-meh",
    ERROR: "fa fa-frown",
  };
  nbpInputDefault = {
    text: "text",
    password: "password",
    clean: "fa fa-times-circle",
  };
  nbpButtonDefault = {
    full: "nbp-button-full-width",
    content: "",
  };
  nbpInputPasswordIcon = {
    SHOW: "fa fa-unlock",
    HIDE: "fa fa-lock",
  };
  nbpTypeInput = {
    ROUNDED: "nbp-rounded",
    CURSOR: "nbp-cursor-not-allowed",
  };
  nbpFormatDate = {
    formatOne: "DD/MM/YYYY",
  };

  constructor(injector: Injector) {
    this.activatedRoute = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.NbpCheckAuthentification();
  }

  ngOnInit(): void { }

  // Functions
  /* Function to check if the user is logged and redirection to correct link or page */
  NbpCheckAuthentification() {
    // Get the token in localStorage
    this.nbpToken = this.nbpLocalStorage.NbpGetTokenLocalStorage();

    // Check if token exist in localStorage
    // 1) If exists, go to the previous page
    // 2) If exists and the user want to go to login or register, go to home page
    // 3) If not exists, go to login page
    if (this.nbpToken && !!this.nbpToken.length) {
      if (this.activatedRoute.snapshot.url[0]?.path !== undefined) {
        const nbpUrl = this.activatedRoute.snapshot.url[0]?.path;
        this.router.navigateByUrl("/" + nbpUrl);
      }
      if (
        this.activatedRoute.snapshot.url[0]?.path === "login" ||
        this.activatedRoute.snapshot.url[0]?.path === "register"
      ) {
        this.router.navigateByUrl("/home");
      }
      if (
        this.activatedRoute.snapshot.url[0]?.path === "login" &&
        this.nbpToken
      ) {
        this.router.navigateByUrl("/login");
      }
    } else {
      if (this.activatedRoute.snapshot.url[0]?.path === "register") {
        this.router.navigateByUrl("/register");
      } else if (
        this.activatedRoute.snapshot.url[0]?.path === "manage-password"
      ) {
        this.router.navigateByUrl("/manage-password");
      } else if (
        this.activatedRoute.snapshot.url[0]?.path ===
        "change-old-password-to-new-password"
      ) {
        this.router.navigateByUrl("/change-old-password-to-new-password");
      } else {
        this.router.navigateByUrl("/login");
      }
    }
  }

  /* Function to navigate to another link or page */
  goTo(name?: string): void {
    window.location.href = name;
  }

  /* Function to get the truncate limit text with inputs as arguments */
  nbpGetTextTruncate(nbpText, nbpTruncateLimit) {
    return nbpText.length > nbpTruncateLimit
      ? nbpText.substring(0, nbpTruncateLimit) + " ..."
      : nbpText;
  }

  /* Function to get the badge outline style classe with input as argument */
  nbpGetBadgeOutlineClasse(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
        return this._badgeOutlineStyleClasse.DEFAULT;
        break;
      case this._style.WHITE:
        return this._badgeOutlineStyleClasse.WHITE;
        break;
      case this._style.WHITE_SMOKE:
        return this._badgeOutlineStyleClasse.WHITE_SMOKE;
        break;
      case this._style.WARM_GRAY_20:
        return this._badgeOutlineStyleClasse.WARM_GRAY_20;
        break;
      case this._style.NIGHT_RIDER:
        return this._badgeOutlineStyleClasse.NIGHT_RIDER;
        break;
      case this._style.SLIVER:
        return this._badgeOutlineStyleClasse.SLIVER;
        break;
      case this._style.BLACK:
        return this._badgeOutlineStyleClasse.BLACK;
        break;
      case this._style.PRIMARY:
        return this._badgeOutlineStyleClasse.PRIMARY;
        break;
      case this._style.TOMATO:
        return this._badgeOutlineStyleClasse.TOMATO;
        break;
      case this._style.INFO:
        return this._badgeOutlineStyleClasse.INFO;
        break;
      case this._style.SUCCESS:
        return this._badgeOutlineStyleClasse.SUCCESS;
        break;
      case this._style.WARNING:
        return this._badgeOutlineStyleClasse.WARNING;
        break;
      case this._style.DANGER:
        return this._badgeOutlineStyleClasse.DANGER;
        break;
      default:
        return this._badgeOutlineStyleClasse.DEFAULT;
        break;
    }
  }

  /* Function to get the badge style classe with input as argument */
  nbpGetBadgeClasse(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
        return this._badgeStyleClasse.DEFAULT;
        break;
      case this._style.WHITE:
        return this._badgeStyleClasse.WHITE;
        break;
      case this._style.WHITE_SMOKE:
        return this._badgeStyleClasse.WHITE_SMOKE;
        break;
      case this._style.WARM_GRAY_20:
        return this._badgeStyleClasse.WARM_GRAY_20;
        break;
      case this._style.NIGHT_RIDER:
        return this._badgeStyleClasse.NIGHT_RIDER;
        break;
      case this._style.SLIVER:
        return this._badgeStyleClasse.SLIVER;
        break;
      case this._style.BLACK:
        return this._badgeStyleClasse.BLACK;
        break;
      case this._style.PRIMARY:
        return this._badgeStyleClasse.PRIMARY;
        break;
      case this._style.TOMATO:
        return this._badgeStyleClasse.TOMATO;
        break;
      case this._style.INFO:
        return this._badgeStyleClasse.INFO;
        break;
      case this._style.SUCCESS:
        return this._badgeStyleClasse.SUCCESS;
        break;
      case this._style.WARNING:
        return this._badgeStyleClasse.WARNING;
        break;
      case this._style.DANGER:
        return this._badgeStyleClasse.DANGER;
        break;
      default:
        return this._badgeStyleClasse.DEFAULT;
        break;
    }
  }

  /* Function to get the radio classe with input as argument */
  nbpGetRadioStyleClasse(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
        return this._radioStyleClasse.DEFAULT;
        break;
      case this._style.PRIMARY:
        return this._radioStyleClasse.PRIMARY;
        break;
      case this._style.INFO:
        return this._radioStyleClasse.INFO;
        break;
      case this._style.SUCCESS:
        return this._radioStyleClasse.SUCCESS;
        break;
      case this._style.WARNING:
        return this._radioStyleClasse.WARNING;
        break;
      case this._style.DANGER:
        return this._radioStyleClasse.DANGER;
        break;
      default:
        return this._radioStyleClasse.DEFAULT;
        break;
    }
  }

  /* Function to get the radio border classe with input as argument */
  nbpGetRadioBorderClasse(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
        return this._radioBorderClasse.DEFAULT;
        break;
      case this._style.PRIMARY:
        return this._radioBorderClasse.PRIMARY;
        break;
      case this._style.INFO:
        return this._radioBorderClasse.INFO;
        break;
      case this._style.SUCCESS:
        return this._radioBorderClasse.SUCCESS;
        break;
      case this._style.WARNING:
        return this._radioBorderClasse.WARNING;
        break;
      case this._style.DANGER:
        return this._radioBorderClasse.DANGER;
        break;
      default:
        return this._radioBorderClasse.DEFAULT;
        break;
    }
  }

  /* Function to get the checkbox classe with input as argument */
  nbpGetCheckBoxStyleClasse(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
        return this._checkBoxStyleClasse.DEFAULT;
        break;
      case this._style.PRIMARY:
        return this._checkBoxStyleClasse.PRIMARY;
        break;
      case this._style.INFO:
        return this._checkBoxStyleClasse.INFO;
        break;
      case this._style.SUCCESS:
        return this._checkBoxStyleClasse.SUCCESS;
        break;
      case this._style.WARNING:
        return this._checkBoxStyleClasse.WARNING;
        break;
      case this._style.DANGER:
        return this._checkBoxStyleClasse.DANGER;
        break;
      default:
        return this._checkBoxStyleClasse.DEFAULT;
        break;
    }
  }

  /* Function to get the background alert classe with input as argument */
  nbpGetBackgroundPanelTitleClasse(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
        return this._backgroundClasse.SLIVER;
        break;
      case this._style.INFO:
        return this._backgroundClasse.EGYPTIAN_BLUE;
        break;
      case this._style.SUCCESS:
        return this._backgroundClasse.MINT_CREAM;
        break;
      case this._style.WARNING:
        return this._backgroundClasse.FLORAL_WHITE;
        break;
      case this._style.DANGER:
      case this._style.TOMATO:
        return this._backgroundClasse.MISTY_ROSE;
        break;
      default:
        return this._style.SLIVER;
        break;
    }
  }

  /* Function to get the background alert classe with input as argument */
  nbpGetBackgroundBoxAlertClasse(nbpInput) {
    switch (nbpInput) {
      case this._alertType.GENERIC:
        return this._backgroundClasse.WHITE;
        break;
      case this._alertType.POSITIVE:
        return this._backgroundClasse.MINT_CREAM;
        break;
      case this._alertType.PROMOTIONAL:
        return this._backgroundClasse.EGYPTIAN_BLUE;
        break;
      case this._alertType.WARNING:
        return this._backgroundClasse.FLORAL_WHITE;
        break;
      case this._alertType.ERROR:
        return this._backgroundClasse.MISTY_ROSE;
        break;
      default:
        return this._backgroundClasse.WHITE;
        break;
    }
  }

  /* Function to get the border classe with inputs as arguments */
  nbpGetBorderClasse(nbpInput, border) {
    switch (nbpInput) {
      case this._style.DEFAULT:
      case this._alertType.GENERIC:
        if (border === this._type.BORDER) {
          return this._borderClasse.DEFAULT;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.DEFAULT;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.DEFAULT;
        }
        if (border === this._type.COLOR) {
          return this._borderColorClasse.DEFAULT;
        }
        break;
      case this._style.WHITE:
        if (border === this._type.BORDER) {
          return this._borderClasse.WHITE;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.WHITE;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.WHITE;
        }
        if (border === this._type.COLOR) {
          return this._borderColorClasse.WHITE;
        }
        break;
      case this._style.WHITE_SMOKE:
        if (border === this._type.BORDER) {
          return this._borderClasse.WHITE_SMOKE;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.WHITE_SMOKE;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.WHITE_SMOKE;
        }
        if (border === this._type.COLOR) {
          return this._borderColorClasse.WHITE_SMOKE;
        }
        break;
      case this._style.WARM_GRAY_20:
        if (border === this._type.BORDER) {
          return this._borderClasse.WARM_GRAY_20;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.WARM_GRAY_20;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.WARM_GRAY_20;
        }
        if (border === this._type.COLOR) {
          return this._borderColorClasse.WARM_GRAY_20;
        }
        break;
      case this._style.NIGHT_RIDER:
        if (border === this._type.BORDER) {
          return this._borderClasse.NIGHT_RIDER;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.NIGHT_RIDER;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.NIGHT_RIDER;
        }
        if (border === this._type.COLOR) {
          return this._borderColorClasse.NIGHT_RIDER;
        }
        break;
      case this._style.SLIVER:
        if (border === this._type.BORDER) {
          return this._borderClasse.SLIVER;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.SLIVER;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.SLIVER;
        }
        if (border === this._type.COLOR) {
          return this._borderColorClasse.SLIVER;
        }
        break;
      case this._style.BLACK:
        if (border === this._type.BORDER) {
          return this._borderClasse.BLACK;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.BLACK;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.BLACK;
        }
        if (border === this._type.COLOR) {
          return this._borderColorClasse.BLACK;
        }
        break;
      case this._style.PRIMARY:
        if (border === this._type.BORDER) {
          return this._borderClasse.PRIMARY;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.PRIMARY;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.PRIMARY;
        }
        if (border === this._type.COLOR) {
          return this._borderColorClasse.PRIMARY;
        }
        break;
      case this._style.TOMATO:
        if (border === this._type.BORDER) {
          return this._borderClasse.TOMATO;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.TOMATO;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.TOMATO;
        }
        if (border === this._type.COLOR) {
          return this._borderColorClasse.TOMATO;
        }
        break;
      case this._style.INFO:
      case this._alertType.PROMOTIONAL:
        if (border === this._type.BORDER) {
          return this._borderClasse.INFO;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.INFO;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.INFO;
        }
        if (border === this._type.COLOR) {
          return this._borderColorClasse.INFO;
        }
        break;
      case this._style.SUCCESS:
      case this._alertType.POSITIVE:
        if (border === this._type.BORDER) {
          return this._borderClasse.SUCCESS;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.SUCCESS;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.SUCCESS;
        }
        if (border === this._type.COLOR) {
          return this._borderColorClasse.SUCCESS;
        }
        break;
      case this._style.WARNING:
      case this._alertType.WARNING:
        if (border === this._type.BORDER) {
          return this._borderClasse.WARNING;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.WARNING;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.WARNING;
        }
        if (border === this._type.COLOR) {
          return this._borderColorClasse.WARNING;
        }
        break;
      case this._style.DANGER:
      case this._alertType.ERROR:
        if (border === this._type.BORDER) {
          return this._borderClasse.DANGER;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.DANGER;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.DANGER;
        }
        if (border === this._type.COLOR) {
          return this._borderColorClasse.DANGER;
        }
        break;
      case this._style.EGYPTIAN_BLUE:
        if (border === this._type.BORDER) {
          return this._borderClasse.EGYPTIAN_BLUE;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.EGYPTIAN_BLUE;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.EGYPTIAN_BLUE;
        }
        break;
      case this._style.MISTY_ROSE:
        if (border === this._type.BORDER) {
          return this._borderClasse.MISTY_ROSE;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.MISTY_ROSE;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.MISTY_ROSE;
        }
        break;
      case this._style.MINT_CREAM:
        if (border === this._type.BORDER) {
          return this._borderClasse.MINT_CREAM;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.MINT_CREAM;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.MINT_CREAM;
        }
        break;
      case this._style.FLORAL_WHITE:
        if (border === this._type.BORDER) {
          return this._borderClasse.FLORAL_WHITE;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.FLORAL_WHITE;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.FLORAL_WHITE;
        }
        break;
      default:
        if (border === this._type.BORDER) {
          return this._borderClasse.DEFAULT;
        }
        if (border === this._type.TOP) {
          return this._borderTopClasse.DEFAULT;
        }
        if (border === this._type.LEFT) {
          return this._borderLeftClasse.DEFAULT;
        }
        if (border === this._type.COLOR) {
          return this._borderColorClasse.DEFAULT;
        }
        break;
    }
  }

  /* Function to get the background classe with input as argument */
  nbpGetBackgroundClasse(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
        return this._backgroundClasse.DEFAULT;
        break;
      case this._style.WHITE:
        return this._backgroundClasse.WHITE;
        break;
      case this._style.WHITE_SMOKE:
        return this._backgroundClasse.WHITE_SMOKE;
        break;
      case this._style.WARM_GRAY_20:
        return this._backgroundClasse.WARM_GRAY_20;
        break;
      case this._style.NIGHT_RIDER:
        return this._backgroundClasse.NIGHT_RIDER;
        break;
      case this._style.SLIVER:
        return this._backgroundClasse.SLIVER;
        break;
      case this._style.BLACK:
        return this._backgroundClasse.BLACK;
        break;
      case this._style.PRIMARY:
        return this._backgroundClasse.PRIMARY;
        break;
      case this._style.TOMATO:
        return this._backgroundClasse.TOMATO;
        break;
      case this._style.INFO:
      case this._alertType.PROMOTIONAL:
        return this._backgroundClasse.INFO;
        break;
      case this._style.SUCCESS:
      case this._alertType.POSITIVE:
        return this._backgroundClasse.SUCCESS;
        break;
      case this._style.WARNING:
        return this._backgroundClasse.WARNING;
        break;
      case this._style.DANGER:
      case this._alertType.ERROR:
        return this._backgroundClasse.DANGER;
        break;
      case this._style.EGYPTIAN_BLUE:
        return this._backgroundClasse.EGYPTIAN_BLUE;
        break;
      case this._style.MISTY_ROSE:
        return this._backgroundClasse.MISTY_ROSE;
        break;
      case this._style.MINT_CREAM:
        return this._backgroundClasse.MINT_CREAM;
        break;
      case this._style.FLORAL_WHITE:
        return this._backgroundClasse.FLORAL_WHITE;
        break;
      default:
        return this._backgroundClasse.DEFAULT;
        break;
    }
  }

  /* Function to get the panel position classe with input as argument */
  nbpGetPanelTitlePosiionClasse(nbpInput) {
    switch (nbpInput) {
      case this._style.LEFT:
        return this._panelTitlePositionClasse.LEFT;
        break;
      case this._style.CENTER:
        return this._panelTitlePositionClasse.CENTER;
        break;
      case this._style.RIGHT:
        return this._panelTitlePositionClasse.RIGHT;
        break;
      default:
        return this._panelTitlePositionClasse.LEFT;
        break;
    }
  }

  /* Function to get the button classe with input as argument */
  nbpGetButtonColorClasse(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
        return this._buttonStyleClasse.DEFAULT;
        break;
      case this._style.DEFAULTHOVER:
        return this._buttonStyleClasse.DEFAULT_HOVER;
        break;
      case this._style.SUCCESS:
        return this._buttonStyleClasse.SUCCESS;
        break;
      case this._style.SUCCESSHOVER:
        return this._buttonStyleClasse.SUCCESS_HOVER;
        break;
      case this._style.INFO:
        return this._buttonStyleClasse.INFO;
        break;
      case this._style.INFOHOVER:
        return this._buttonStyleClasse.INFO_HOVER;
        break;
      case this._style.PRIMARY:
        return this._buttonStyleClasse.PRIMARY;
        break;
      case this._style.PRIMARYHOVER:
        return this._buttonStyleClasse.PRIMARY_HOVER;
        break;
      case this._style.DANGER:
        return this._buttonStyleClasse.DANGER;
        break;
      case this._style.DANGERHOVER:
        return this._buttonStyleClasse.DANGER_HOVER;
        break;
      case this._style.WARNING:
        return this._buttonStyleClasse.WARNING;
        break;
      case this._style.WARNINGHOVER:
        return this._buttonStyleClasse.WARNING_HOVER;
        break;
      default:
        return this._buttonStyleClasse.DEFAULT;
        break;
    }
  }

  /* Function to get the button form (normal or outline) classe with inputs as argument */
  nbpGetButtonFormColorClasse(nbpInput1, nbpInput2) {
    switch (nbpInput1) {
      case this._style.ROUNDED:
        return this._buttonStyleClasse.ROUNDED;
        break;
      case this._style.OUTLINE:
        switch (nbpInput2) {
          case this._style.DEFAULT:
            return this._buttonStyleClasse.OUTLINE_DEFAULT;
            break;
          case this._style.DEFAULTHOVER:
            return this._buttonStyleClasse.OUTLINE_DEFAULT_HOVER;
            break;
          case this._style.SUCCESS:
            return this._buttonStyleClasse.OUTLINE_SUCCESS;
            break;
          case this._style.SUCCESSHOVER:
            return this._buttonStyleClasse.OUTLINE_SUCCESS_HOVER;
            break;
          case this._style.INFO:
            return this._buttonStyleClasse.OUTLINE_INFO;
            break;
          case this._style.INFOHOVER:
            return this._buttonStyleClasse.OUTLINE_INFO_HOVER;
            break;
          case this._style.PRIMARY:
            return this._buttonStyleClasse.OUTLINE_PRIMARY;
            break;
          case this._style.PRIMARYHOVER:
            return this._buttonStyleClasse.OUTLINE_PRIMARY_HOVER;
            break;
          case this._style.DANGER:
            return this._buttonStyleClasse.OUTLINE_DANGER;
            break;
          case this._style.DANGERHOVER:
            return this._buttonStyleClasse.OUTLINE_DANGER_HOVER;
            break;
          case this._style.WARNING:
            return this._buttonStyleClasse.OUTLINE_WARNING;
            break;
          case this._style.WARNINGHOVER:
            return this._buttonStyleClasse.OUTLINE_WARNING_HOVER;
            break;
          default:
            return this._buttonStyleClasse.OUTLINE_DEFAULT;
            break;
        }
    }
  }

  /* Function to get the color classe with input as argument */
  nbpGetColorClasse(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
      case this._alertType.GENERIC:
        return this._colorClasse.DEFAULT;
        break;
      case this._style.PRIMARY:
        return this._colorClasse.PRIMARY;
        break;
      case this._style.DANGER:
      case this._alertType.ERROR:
        return this._colorClasse.DANGER;
        break;
      case this._style.WARNING:
      case this._alertType.WARNING:
        return this._colorClasse.WARNING;
        break;
      case this._style.INFO:
      case this._alertType.PROMOTIONAL:
        return this._colorClasse.INFO;
        break;
      case this._style.TOMATO:
        return this._colorClasse.TOMATO;
        break;
      case this._style.WHITE:
        return this._colorClasse.WHITE;
        break;
      case this._style.BLACK:
        return this._colorClasse.BLACK;
        break;
      case this._style.WARM_GRAY_20:
        return this._colorClasse.WARM_GRAY_20;
        break;
      case this._style.NIGHT_RIDER:
        return this._colorClasse.NIGHT_RIDER;
        break;
      case this._style.SUCCESS:
      case this._alertType.POSITIVE:
        return this._colorClasse.SUCCESS;
        break;
      default:
        return this._colorClasse.DEFAULT;
        break;
    }
  }

  /* Function to get the feedback color classe with input as argument */
  nbpGetColorFeedbackClasse(nbpInput) {
    switch (nbpInput) {
      case this._feedbackType.POSITIVE:
        this.nbpFeedbackColor = this.nbpGetColorClasse(this._style.SUCCESS);
        return (
          this.nbpFeedbackIcon.SUCCESS +
          this.nbpSeparator +
          this.nbpFeedbackColor
        );
        break;
      case this._feedbackType.WARNING:
        this.nbpFeedbackColor = this.nbpGetColorClasse(this._style.WARNING);
        return (
          this.nbpFeedbackIcon.WARNING +
          this.nbpSeparator +
          this.nbpFeedbackColor
        );
        break;
      case this._feedbackType.ERROR:
        this.nbpFeedbackColor = this.nbpGetColorClasse(this._alertType.ERROR);
        return (
          this.nbpFeedbackIcon.ERROR + this.nbpSeparator + this.nbpFeedbackColor
        );
        break;
      default:
        this.nbpFeedbackColor = this.nbpGetColorClasse(this._style.SUCCESS);
        return (
          this.nbpFeedbackIcon.SUCCESS +
          this.nbpSeparator +
          this.nbpFeedbackColor
        );
        break;
    }
  }

  /* Function to get the icon classe with input as argument */
  nbpGetIconClasse(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
      case this._alertType.GENERIC:
        return this._iconClasse.GENERIC;
        break;
      case this._style.SUCCESS:
      case this._alertType.POSITIVE:
        return this._iconClasse.POSITIVE;
        break;
      case this._alertType.INFO:
        return this._iconClasse.GENERIC;
        break;
      case this._alertType.PROMOTIONAL:
        return this._iconClasse.PROMOTIONAL;
        break;
      case this._style.WARNING:
      case this._alertType.WARNING:
        return this._iconClasse.WARNING;
        break;
      case this._style.DANGER:
      case this._style.TOMATO:
      case this._alertType.ERROR:
        return this._iconClasse.ERROR;
        break;
      default:
        return this._iconClasse.GENERIC;
        break;
    }
  }

  /* Function to get the text transform classe with input as argument */
  nbpGetTextTransformClasse(nbpInput) {
    switch (nbpInput) {
      case this._pipe.LOWERCASE:
        return this._textTransformClasse.LOWERCASE;
        break;
      case this._pipe.UPPERCASE:
        return this._textTransformClasse.UPPERCASE;
        break;
      case this._pipe.CAPITALIZE:
        return this._textTransformClasse.CAPITALIZE;
        break;
      default:
        return this._textTransformClasse.INHERIT;
        break;
    }
  }

  /* Function to get the font size classe with input as argument */
  nbpGetFontSizeClasse(nbpInput) {
    switch (nbpInput) {
      case this._fontSize.SMALL:
        return this._fontSizeClasse.SMALL;
        break;
      case this._fontSize.MEDIUM:
        return this._fontSizeClasse.MEDIUM;
        break;
      case this._fontSize.LARGE:
        return this._fontSizeClasse.LARGE;
        break;
      default:
        return this._fontSizeClasse.SMALL;
        break;
    }
  }

  /* Function to get the text align classe with input as argument */
  nbpGetTextAlignClasse(nbpInput) {
    switch (nbpInput) {
      case this._style.LEFT:
        return this._textAlignClasse.LEFT;
        break;
      case this._style.RIGHT:
        return this._textAlignClasse.RIGHT;
        break;
      case this._style.CENTER:
        return this._textAlignClasse.CENTER;
        break;
      default:
        return this._textAlignClasse.LEFT;
        break;
    }
  }

  /* Function to get the size classe with input as argument */
  nbpGetSizeClasse(nbpInput, nbpType) {
    switch (nbpInput) {
      case this._size.SM:
        if (nbpType === this._type.BUTTON) {
          return this._buttonSizeClasse.SMALL;
        }
        if (nbpType === this._type.SWITCH) {
          return this._switchSizeClasse.SM;
        }
        break;
      case this._size.MD:
        if (nbpType === this._type.BUTTON) {
          return this._buttonSizeClasse.MEDIUM;
        }
        if (nbpType === this._type.SWITCH) {
          return this._switchSizeClasse.MD;
        }
        break;
      case this._size.LG:
        if (nbpType === this._type.BUTTON) {
          return this._buttonSizeClasse.LARGE;
        }
        if (nbpType === this._type.SWITCH) {
          return this._switchSizeClasse.LG;
        }
        break;
      default:
        if (nbpType === this._type.BUTTON) {
          return this._buttonSizeClasse.SMALL;
        }
        if (nbpType === this._type.SWITCH) {
          return this._switchSizeClasse.XS;
        }
        break;
    }
  }

  /* Function to get the Modal Size classe with input as argument */
  nbpGetSizeModalClasse(nbpInput) {
    switch (nbpInput) {
      case this._size.SM:
        return this._sizeModalClasse.SMALL;
        break;
      case this._size.MD:
        return this._sizeModalClasse.MEDIUM;
        break;
      case this._size.LG:
        return this._sizeModalClasse.LARGE;
        break;
      default:
        return this._sizeModalClasse.SMALL;
        break;
    }
  }

  /* Function to get the Modal Position classe with input as argument */
  nbpGetModalPositionClasse(nbpInput) {
    switch (nbpInput) {
      case this._position.TOP:
        return this._positionModalClasse.CENTER;
        break;
      case this._style.CENTER:
        return this._positionModalClasse.CENTER;
        break;
      case this._style.DEFAULT:
        return this._positionModalClasse.TOP;
        break;
      default:
        return this._positionModalClasse.TOP;
        break;
    }
  }

  nbpGetnbpTabbarPosition(nbpInput) {
    switch (nbpInput) {
      case this._tabbarPosition.LEFT:
        return this._positionTabbarClasse.LEFT;
        break;
      case this._tabbarPosition.CENTER:
        return this._positionTabbarClasse.CENTER;
        break;
      case this._tabbarPosition.RIGHT:
        return this._positionTabbarClasse.RIGHT;
        break;
      case this._tabbarPosition.FLEX:
        return this._positionTabbarClasse.FLEX;
        break;
      default:
        return this._positionTabbarClasse.LEFT;
        break;
    }
  }

  nbpGetnbpTabbarType(nbpInput) {
    switch (nbpInput) {
      case this._tabbarType.TABS:
        return this._typeTabbarClasse.TABS;
        break;
      case this._tabbarType.PILLS:
        return this._typeTabbarClasse.PILLS;
        break;
      case this._tabbarType.JUSTIFIED:
        return this._typeTabbarClasse.JUSTIFIED;
        break;
      case this._tabbarType.PILLSANDJUSTIFY:
        return this._typeTabbarClasse.PILLSANDJUSTIFY;
        break;
      default:
        return this._typeTabbarClasse.TABS;
        break;
    }
  }

  onChangeClass(event) {
    const id = event.target.innerText;
    console.log("this.event; ", event);
    this.status = true;
  }

  nbpValidatePassword(password) {
    const minMaxLength = /^[\s\S]{8,32}$/,
      upperCase = /[A-Z]/,
      lowerCase = /[a-z]/,
      atLeastNumber = /[0-9]/,
      specialCharacter = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

    if (!minMaxLength.test(password)) {
      this.nbpCheckPasswordErrorMessage = this.nbpCheckPasswordLenghtErrorMessage;
      return true;
    }
    if (!upperCase.test(password)) {
      this.nbpCheckPasswordErrorMessage = this.nbpCheckPasswordUppercaseErrorMessage;
      return true;
    }
    if (!lowerCase.test(password)) {
      this.nbpCheckPasswordErrorMessage = this.nbpCheckPasswordLowercaseErrorMessage;
      return true;
    }
    if (!atLeastNumber.test(password)) {
      this.nbpCheckPasswordErrorMessage = this.nbpCheckPasswordNumberErrorMessage;
      return true;
    }
    if (!specialCharacter.test(password)) {
      this.nbpCheckPasswordErrorMessage = this.nbpCheckPasswordSpecialCharacterErrorMessage;
      return true;
    }
    this.nbpCheckPasswordErrorMessage = "";
    return false;
  }
}
