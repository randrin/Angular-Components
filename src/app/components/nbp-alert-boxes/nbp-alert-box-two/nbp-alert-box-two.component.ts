import { Component, Input, OnInit } from "@angular/core";
import {
  NbpColorClasse,
  NbpIconClasse,
  NbpBorderClasse,
} from "src/assets/utils/nbp-commons/nbp-commons.classes";
import {
  NbpAlertType,
  NbpStyle,
} from "src/assets/utils/nbp-commons/nbp-commons.enums";

@Component({
  selector: "nbp-alert-box-two",
  templateUrl: "./nbp-alert-box-two.component.html",
  styleUrls: ["./nbp-alert-box-two.component.scss"],
})
export class NbpAlertBoxTwoComponent implements OnInit {
  @Input() nbpText: string;
  @Input() nbpAlertType: string;

  _alertType = NbpAlertType;
  _style = NbpStyle;

  _colorClasse = NbpColorClasse;
  _iconClasse = NbpIconClasse;
  _borderClasse = NbpBorderClasse;

  nbpAlertBoxType: string;
  nbpAlertBoxIcon: string;
  nbpAlertBoxColor: string;

  constructor() {}

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpGetColorBoxAlert(this.nbpAlertType);
  }

  nbpGetColorBoxAlert(nbpInput) {
    switch (nbpInput) {
      case this._alertType.GENERIC:
        this.nbpAlertBoxIcon = this._iconClasse.GENERIC;
        this.nbpAlertBoxType = this._borderClasse.DEFAULT;
        this.nbpAlertBoxColor = this._colorClasse.DEFAULT;
        break;
      case this._alertType.POSITIVE:
        this.nbpAlertBoxIcon = this._iconClasse.POSITIVE;
        this.nbpAlertBoxType = this._borderClasse.SUCCESS;
        this.nbpAlertBoxColor = this._colorClasse.SUCCESS;
        break;
      case this._alertType.PROMOTIONAL:
        this.nbpAlertBoxIcon = this._iconClasse.PROMOTIONAL;
        this.nbpAlertBoxType = this._borderClasse.INFO;
        this.nbpAlertBoxColor = this._colorClasse.INFO;
        break;
      case this._alertType.WARNING:
        this.nbpAlertBoxIcon = this._iconClasse.WARNING;
        this.nbpAlertBoxType = this._borderClasse.WARNING;
        this.nbpAlertBoxColor = this._colorClasse.WARNING;
        break;
      case this._alertType.ERROR:
        this.nbpAlertBoxIcon = this._iconClasse.ERROR;
        this.nbpAlertBoxType = this._borderClasse.DANGER;
        this.nbpAlertBoxColor = this._colorClasse.DANGER;
        break;
      default:
        this.nbpAlertBoxIcon = this._iconClasse.GENERIC;
        this.nbpAlertBoxType = this._borderClasse.DEFAULT;
        this.nbpAlertBoxColor = this._colorClasse.DEFAULT;
        break;
    }
  }
}
