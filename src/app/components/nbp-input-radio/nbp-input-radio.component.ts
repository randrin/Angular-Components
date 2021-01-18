import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-input-radio',
  templateUrl: './nbp-input-radio.component.html',
  styleUrls: ['./nbp-input-radio.component.scss']
})
export class NbpInputRadioComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpRadioLabel: string;
  @Input() nbpRadioName: string;
  @Input() nbpRadioStyle: string;
  @Input() nbpRadioDisabled: boolean;
  @Input() nbpRadioChecked: boolean = false;

  
  nbpModel: boolean;
  nbpRadio: string;
  nbpRadioInput: string;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpRadio = this.nbpGetRadioStyle(this.nbpRadioStyle);
  }


  nbpRadioClick(event) {
    console.log('nbpRadioClick: ', event);
  }

  nbpGetRadioStyle(nbpInput) {
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
}
