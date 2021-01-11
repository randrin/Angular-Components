import { Component, Input, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpBackgroundClasse } from 'src/assets/utils/nbp-commons/nbp-commons.classes';
import { NbpStyle, NbpFontSize, NbpPipe, NbpSize, NbpAlertType } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-panel-title-two',
  templateUrl: './nbp-panel-title-two.component.html',
  styleUrls: ['./nbp-panel-title-two.component.scss']
})
export class NbpPanelTitleTwoComponent implements OnInit {

  @Input() nbpPanelTitle: string;
  @Input() nbpPanelTitleStyle: string;

  _style = NbpStyle;
  _fontSize = NbpFontSize;
  _pipe = NbpPipe;
  _size = NbpSize;
  _alert = NbpAlertType;
  _model = new Model();

  _backgroundClasse = NbpBackgroundClasse;

  nbpTitle: string;
  nbpBackground: string;

  constructor() { }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpGetColorStyle(this.nbpPanelTitleStyle);
  }

  nbpGetColorStyle(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
        this.nbpBackground = this._backgroundClasse.DEFAULT;
        break;
      case this._style.WHITE:
        this.nbpBackground = this._backgroundClasse.WHITE;
        break;
      case this._style.WHITE_SMOKE:
        this.nbpBackground = this._backgroundClasse.WHITE_SMOKE;
        break;
      case this._style.WARM_GRAY_20:
        this.nbpBackground = this._backgroundClasse.WARM_GRAY_20;
        break;
      case this._style.NIGHT_RIDER:
        this.nbpBackground = this._backgroundClasse.NIGHT_RIDER;
        break;
      case this._style.SLIVER:
        this.nbpBackground = this._backgroundClasse.SLIVER;
        break;
      case this._style.BLACK:
        this.nbpBackground = this._backgroundClasse.BLACK;
        break;
      case this._style.PRIMARY:
        this.nbpBackground = this._backgroundClasse.PRIMARY;
        break;
      case this._style.TOMATO:
        this.nbpBackground = this._backgroundClasse.TOMATO;
        break;
      case this._style.INFO:
        this.nbpBackground = this._backgroundClasse.INFO;
        break;
      case this._style.SUCCESS:
        this.nbpBackground = this._backgroundClasse.SUCCESS;
        break;
      case this._style.WARNING:
        this.nbpBackground = this._backgroundClasse.WARNING;
        break;
      case this._style.DANGER:
        this.nbpBackground = this._backgroundClasse.DANGER;
        break;
      default:
        this.nbpBackground = this._backgroundClasse.DEFAULT;
        break;
    }
  }
}
