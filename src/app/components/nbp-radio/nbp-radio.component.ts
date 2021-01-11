import { Component, Input, OnInit } from '@angular/core';
import { NbpRadioStyleClasse } from 'src/assets/utils/nbp-commons/nbp-commons.classes';
import { NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-radio',
  templateUrl: './nbp-radio.component.html',
  styleUrls: ['./nbp-radio.component.scss']
})
export class NbpRadioComponent implements OnInit {

  @Input() nbpRadioLabel: string;
  @Input() nbpRadioName: string;
  @Input() nbpRadioStyle: string;
  @Input() nbpRadioDisabled: boolean;
  @Input() nbpRadioChecked: boolean = false;

  _style = NbpStyle;
  _radioStyleClasse = NbpRadioStyleClasse;

  nbpModel: boolean;
  nbpRadio: string;
  nbpRadioInput: string;

  constructor() { }

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
