import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-alert-box-three',
  templateUrl: './nbp-alert-box-three.component.html',
  styleUrls: ['./nbp-alert-box-three.component.scss']
})
export class NbpAlertBoxThreeComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpText: string;
  @Input() nbpAlertType: string;

  nbpAlertBoxType: string;
  nbpAlertBoxIcon: string;
  nbpAlertBoxColor: string;
  nbpAlertBoxBackground: string;

  constructor(injector: Injector) { super(injector); }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpAlertBoxIcon = this.nbpGetIconClasse(this.nbpAlertType);
    this.nbpAlertBoxType = this.nbpGetBorderClasse(this.nbpAlertType);
    this.nbpAlertBoxColor = this.nbpGetColorClasse(this.nbpAlertType);
    this.nbpAlertBoxBackground = this.nbpGetBackgroundBoxAlertClasse(this.nbpAlertType);;
  }

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
}
