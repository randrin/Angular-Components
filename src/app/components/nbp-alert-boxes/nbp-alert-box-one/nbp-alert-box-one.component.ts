import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  NbpBackgroundClasse,
  NbpBorderClasse,
  NbpColorClasse,
  NbpIconClasse,
} from 'src/assets/utils/nbp-commons/nbp-commons.classes';
import {
  NbpAlertType,
  NbpStyle,
} from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-alert-box-one',
  templateUrl: './nbp-alert-box-one.component.html',
  styleUrls: ['./nbp-alert-box-one.component.scss'],
})
export class NbpAlertBoxOneComponent implements OnInit {
  @Input() nbpText: string;
  @Input() nbpClose: boolean;
  @Input() nbpAlertType: string;
  @Input() nbpColorStyle: string;

  @Output() nbpClickClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  _alertType = NbpAlertType;
  _style = NbpStyle;

  _colorClasse = NbpColorClasse;
  _iconClasse = NbpIconClasse;
  _borderClasse = NbpBorderClasse;
  _backgroundClasse = NbpBackgroundClasse;

  nbpAlertBoxTextColor: string;
  nbpAlertBoxType: string;
  nbpAlertBoxIcon: string;
  nbpAlertBoxBackground: string;
  nbpSeparator: string = ' ';

  constructor() {}

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpGetColorBoxAlert(this.nbpAlertType);
    this.nbpAlertBoxTextColor = this.nbpGetColorTextBoxAlert(
      this.nbpColorStyle
    );
  }

  nbpGetColorTextBoxAlert(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
        return this._colorClasse.DEFAULT;
        break;
      case this._style.PRIMARY:
        return this._colorClasse.PRIMARY;
        break;
      case this._style.WHITE:
        return this._colorClasse.WHITE;
        break;
      case this._style.DANGER:
        return this._colorClasse.DANGER;
        break;
      default:
        return this._colorClasse.DEFAULT;
        break;
    }
  }

  nbpGetColorBoxAlert(nbpInput) {
    switch (nbpInput) {
      case this._alertType.GENERIC:
        this.nbpAlertBoxIcon = this._iconClasse.GENERIC;
        this.nbpAlertBoxType = this._borderClasse.DEFAULT;
        this.nbpAlertBoxBackground = this._backgroundClasse.DEFAULT;
        break;
      case this._alertType.POSITIVE:
        this.nbpAlertBoxIcon = this._iconClasse.POSITIVE;
        this.nbpAlertBoxType = this._borderClasse.SUCCESS;
        this.nbpAlertBoxBackground = this._backgroundClasse.SUCCESS;
        break;
      case this._alertType.PROMOTIONAL:
        this.nbpAlertBoxIcon = this._iconClasse.PROMOTIONAL;
        this.nbpAlertBoxType = this._borderClasse.INFO;
        this.nbpAlertBoxBackground = this._backgroundClasse.INFO;
        break;
      case this._alertType.WARNING:
        this.nbpAlertBoxIcon = this._iconClasse.WARNING;
        this.nbpAlertBoxType = this._borderClasse.WARNING;
        this.nbpAlertBoxBackground = this._backgroundClasse.WARNING;
        break;
      case this._alertType.ERROR:
        this.nbpAlertBoxIcon = this._iconClasse.ERROR;
        this.nbpAlertBoxType = this._borderClasse.DANGER;
        this.nbpAlertBoxBackground = this._backgroundClasse.DANGER;
        break;
      default:
        this.nbpAlertBoxIcon = this._iconClasse.GENERIC;
        this.nbpAlertBoxType = this._borderClasse.DEFAULT;
        this.nbpAlertBoxBackground = this._backgroundClasse.DEFAULT;
        break;
    }
  }

  nbpOnClickClose() {
    this.nbpClickClose.emit(true);
  }
}
