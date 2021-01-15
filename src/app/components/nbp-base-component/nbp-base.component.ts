import { Component, Injector, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Model } from "src/app/models/model";
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
  NbpTextAlignClasse
} from "src/assets/utils/nbp-commons/nbp-commons.classes";
import {
  NbpAlertType,
  NbpCtaType,
  NbpPipe,
  NbpSize,
  NbpStyle,
  NbpFontSize,
} from "src/assets/utils/nbp-commons/nbp-commons.enums";

@Component({
  selector: "nbp-base-component",
  templateUrl: "./nbp-base.component.html",
  styleUrls: ["./nbp-base.component.scss"],
})
export class NbpBaseComponent implements OnInit {
  router: Router;
  activatedRoute: ActivatedRoute;

  _alertType = NbpAlertType;
  _style = NbpStyle;
  _fontSize = NbpFontSize;
  _pipe = NbpPipe;
  _size = NbpSize;
  _ctaType = NbpCtaType;
  _model = new Model();

  _colorClasse = NbpColorClasse;
  _iconClasse = NbpIconClasse;
  _borderColorClasse = NbpBorderColorClasse;
  _backgroundClasse = NbpBackgroundClasse;
  _borderClasse = NbpBorderClasse;
  _textTransformClasse = NbpTextTransformClasse;
  _badgeStyleClasse = NbpBadgeStyleClasse;
  _badgeOutlineStyleClasse = NbpBadgeOutlineStyleClasse;
  _fontSizeClasse = NbpFontSizeClasse;
  _textAlignClasse = NbpTextAlignClasse;

  nbpColor: string;
  nbpBackground: string;
  nbpBorder: string;
  nbpTextTransform: string;

  nbpSeparator: string = " ";
  nbpPosition = {
    LEFT: "nbp-deep-link-left",
    RIGHT: "nbp-deep-link-right",
  };

  constructor(injector: Injector) {
    this.activatedRoute = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
  }

  ngOnInit(): void { }

  // Functions
  /* Function to navigate to another link or page */
  goTo(name?: string): void {
    window.location.href = name;
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

  /* Function to get the border classe with input as argument */
  nbpGetBorderClasse(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
      case this._alertType.GENERIC:
        return this._borderClasse.DEFAULT;
        break;
      case this._style.WHITE:
        return this._borderClasse.WHITE;
        break;
      case this._style.WHITE_SMOKE:
        return this._borderClasse.WHITE_SMOKE;
        break;
      case this._style.WARM_GRAY_20:
        return this._borderClasse.WARM_GRAY_20;
        break;
      case this._style.NIGHT_RIDER:
        return this._borderClasse.NIGHT_RIDER;
        break;
      case this._style.SLIVER:
        return this._borderClasse.SLIVER;
        break;
      case this._style.BLACK:
        return this._borderClasse.BLACK;
        break;
      case this._style.PRIMARY:
        return this._borderClasse.PRIMARY;
        break;
      case this._style.TOMATO:
        return this._borderClasse.TOMATO;
        break;
      case this._style.INFO:
      case this._alertType.PROMOTIONAL:
        return this._borderClasse.INFO;
        break;
      case this._style.SUCCESS:
      case this._alertType.POSITIVE:
        return this._borderClasse.SUCCESS;
        break;
      case this._style.WARNING:
      case this._alertType.WARNING:
        return this._borderClasse.WARNING;
        break;
      case this._style.DANGER:
      case this._alertType.ERROR:
        return this._borderClasse.DANGER;
        break;
      case this._style.EGYPTIAN_BLUE:
        return this._borderClasse.EGYPTIAN_BLUE;
        break;
      case this._style.MISTY_ROSE:
        return this._borderClasse.MISTY_ROSE;
        break;
      case this._style.MINT_CREAM:
        return this._borderClasse.MINT_CREAM;
        break;
      case this._style.FLORAL_WHITE:
        return this._borderClasse.FLORAL_WHITE;
        break;
      default:
        return this._borderClasse.DEFAULT;
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

  /* Function to get the border color classe with input as argument */
  nbpGetBorderColorClasse(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
      case this._alertType.GENERIC:
        return this._borderColorClasse.DEFAULT;
        break;
      case this._style.WHITE:
        return this._borderColorClasse.WHITE;
        break;
      case this._style.WHITE_SMOKE:
        return this._borderColorClasse.WHITE_SMOKE;
        break;
      case this._style.WARM_GRAY_20:
        return this._borderColorClasse.WARM_GRAY_20;
        break;
      case this._style.NIGHT_RIDER:
        return this._borderColorClasse.NIGHT_RIDER;
        break;
      case this._style.SLIVER:
        return this._borderColorClasse.SLIVER;
        break;
      case this._style.BLACK:
        return this._borderColorClasse.BLACK;
        break;
      case this._style.PRIMARY:
        return this._borderColorClasse.PRIMARY;
        break;
      case this._style.TOMATO:
        return this._borderColorClasse.TOMATO;
        break;
      case this._style.INFO:
      case this._alertType.PROMOTIONAL:
        return this._borderColorClasse.INFO;
        break;
      case this._style.SUCCESS:
      case this._alertType.POSITIVE:
        return this._borderColorClasse.SUCCESS;
        break;
      case this._style.WARNING:
      case this._alertType.WARNING:
        return this._borderColorClasse.WARNING;
        break;
      case this._style.DANGER:
      case this._alertType.ERROR:
        return this._borderColorClasse.DANGER;
        break;
      default:
        return this._borderColorClasse.DEFAULT;
        break;
    }
  }

  /* Function to get the icon classe with input as argument */
  nbpGetIconClasse(nbpInput) {
    switch (nbpInput) {
      case this._alertType.GENERIC:
        return this._iconClasse.GENERIC;
        break;
      case this._alertType.POSITIVE:
        return this._iconClasse.POSITIVE;
        break;
      case this._alertType.PROMOTIONAL:
        return this._iconClasse.PROMOTIONAL;
        break;
      case this._alertType.WARNING:
        return this._iconClasse.WARNING;
        break;
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
        return this._textTransformClasse.CAPITALIZE;
        break;
      case this._pipe.UPPERCASE:
        return this._textTransformClasse.UPPERCASE;
        break;
      default:
        return this._textTransformClasse.CAPITALIZE;
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
}
