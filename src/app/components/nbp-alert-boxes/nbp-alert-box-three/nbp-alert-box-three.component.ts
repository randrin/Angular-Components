import { Component, Input, OnInit } from '@angular/core';
import { NbpColorClasse, NbpIconClasse, NbpBorderClasse, NbpBackgroundClasse } from 'src/assets/utils/nbp-commons/nbp-commons.classes';
import { NbpAlertType, NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-alert-box-three',
  templateUrl: './nbp-alert-box-three.component.html',
  styleUrls: ['./nbp-alert-box-three.component.scss']
})
export class NbpAlertBoxThreeComponent implements OnInit {

  @Input() nbpText: string;
  @Input() nbpAlertType: string;

  _alertType = NbpAlertType;
  _style = NbpStyle;

  _colorClasse = NbpColorClasse;
  _iconClasse = NbpIconClasse;
  _borderClasse = NbpBorderClasse;
  _backgroundClasse = NbpBackgroundClasse;

  nbpAlertBoxType: string;
  nbpAlertBoxIcon: string;
  nbpAlertBoxColor: string;
  nbpAlertBoxBackground: string;

  constructor() { }

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
        this.nbpAlertBoxBackground = this._backgroundClasse.WHITE;
        break;
      case this._alertType.POSITIVE:
        this.nbpAlertBoxIcon = this._iconClasse.POSITIVE;
        this.nbpAlertBoxType = this._borderClasse.SUCCESS;
        this.nbpAlertBoxColor = this._colorClasse.SUCCESS;
        this.nbpAlertBoxBackground = this._backgroundClasse.MINT_CREAM;
        break;
      case this._alertType.PROMOTIONAL:
        this.nbpAlertBoxIcon = this._iconClasse.PROMOTIONAL;
        this.nbpAlertBoxType = this._borderClasse.INFO;
        this.nbpAlertBoxColor = this._colorClasse.INFO;
        this.nbpAlertBoxBackground = this._backgroundClasse.EGYPTIAN_BLUE;
        break;
      case this._alertType.WARNING:
        this.nbpAlertBoxIcon = this._iconClasse.WARNING;
        this.nbpAlertBoxType = this._borderClasse.WARNING;
        this.nbpAlertBoxColor = this._colorClasse.WARNING;
        this.nbpAlertBoxBackground = this._backgroundClasse.FLORAL_WHITE;
        break;
      case this._alertType.ERROR:
        this.nbpAlertBoxIcon = this._iconClasse.ERROR;
        this.nbpAlertBoxType = this._borderClasse.DANGER;
        this.nbpAlertBoxColor = this._colorClasse.DANGER;
        this.nbpAlertBoxBackground = this._backgroundClasse.MISTY_ROSE;
        break;
      default:
        this.nbpAlertBoxIcon = this._iconClasse.GENERIC;
        this.nbpAlertBoxType = this._borderClasse.DEFAULT;
        this.nbpAlertBoxColor = this._colorClasse.DEFAULT;
        this.nbpAlertBoxBackground = this._backgroundClasse.WHITE;
        break;
    }
  }

}
