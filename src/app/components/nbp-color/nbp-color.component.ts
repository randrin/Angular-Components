import { Component, Input, OnInit } from '@angular/core';
import { NbpBorderClasse } from 'src/assets/utils/nbp-commons/nbp-commons.classes';
import { NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-color',
  templateUrl: './nbp-color.component.html',
  styleUrls: ['./nbp-color.component.scss']
})
export class NbpColorComponent implements OnInit {

  @Input() nbpColorStyle: string;
  @Input() nbpColorName: string;
  @Input() nbpColorCode: string;

  _style = NbpStyle;
  _borderClasse = NbpBorderClasse;

  nbpColor: string;
  nbpSeparator: string = ' ';

  constructor() { }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  nbpSetUpComponent() {
    this.nbpColor = this.nbpGetColorStyle(this.nbpColorStyle);
  }

  nbpGetColorStyle(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
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
        return this._borderClasse.INFO;
        break;
      case this._style.SUCCESS:
        return this._borderClasse.SUCCESS;
        break;
      case this._style.WARNING:
        return this._borderClasse.WARNING;
        break;
      case this._style.DANGER:
        return this._borderClasse.DANGER;
        break;
      default:
        return this._borderClasse.DEFAULT;
        break;
    }
  }
}
