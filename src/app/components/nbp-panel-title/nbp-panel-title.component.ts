import { Component, Input, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpBackgroundClasse, NbpBorderClasse, NbpPanelTitlePositionClasse } from 'src/assets/utils/nbp-commons/nbp-commons.classes';
import { NbpStyle, NbpFontSize, NbpPipe, NbpSize, NbpAlertType } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-panel-title',
  templateUrl: './nbp-panel-title.component.html',
  styleUrls: ['./nbp-panel-title.component.scss']
})
export class NbpPanelTitleComponent implements OnInit {

  @Input() nbpPanelTitle: string;
  @Input() nbpPanelTitleStyle: string;
  @Input() nbpPanelTitlePosition: string;

  _style = NbpStyle;
  _fontSize = NbpFontSize;
  _pipe = NbpPipe;
  _size = NbpSize;
  _alert = NbpAlertType;
  _model = new Model();

  _borderClasse = NbpBorderClasse;
  _backgroundClasse = NbpBackgroundClasse;
  _panelTitlePositionClasse = NbpPanelTitlePositionClasse;

  nbpTitle: string;
  nbpBorderPanel: string;
  nbpBackgroundTitle: string;
  nbpPositionTitle: string;
  nbpSeparator: string = ' ';

  constructor() { }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpGetClasses();
  }

  nbpGetClasses() {
    this.nbpGetColorStyle(this.nbpPanelTitleStyle);
    this.nbpPositionTitle = this.nbpGetPositionTitle(this.nbpPanelTitlePosition);
    this.nbpTitle = this.nbpBackgroundTitle + this.nbpSeparator + this.nbpPositionTitle;
  }

  nbpGetPositionTitle(nbpInput) {
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

  nbpGetColorStyle(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
        this.nbpBorderPanel = this._borderClasse.DEFAULT;
        this.nbpBackgroundTitle = this._backgroundClasse.DEFAULT;
        break;
      case this._style.WHITE:
        this.nbpBorderPanel = this._borderClasse.WHITE;
        this.nbpBackgroundTitle = this._backgroundClasse.WHITE;
        break;
      case this._style.WHITE_SMOKE:
        this.nbpBorderPanel = this._borderClasse.WHITE_SMOKE;
        this.nbpBackgroundTitle = this._backgroundClasse.WHITE_SMOKE;
        break;
      case this._style.WARM_GRAY_20:
        this.nbpBorderPanel = this._borderClasse.WARM_GRAY_20;
        this.nbpBackgroundTitle = this._backgroundClasse.WARM_GRAY_20;
        break;
      case this._style.NIGHT_RIDER:
        this.nbpBorderPanel = this._borderClasse.NIGHT_RIDER;
        this.nbpBackgroundTitle = this._backgroundClasse.NIGHT_RIDER;
        break;
      case this._style.SLIVER:
        this.nbpBorderPanel = this._borderClasse.SLIVER;
        this.nbpBackgroundTitle = this._backgroundClasse.SLIVER;
        break;
      case this._style.BLACK:
        this.nbpBorderPanel = this._borderClasse.BLACK;
        this.nbpBackgroundTitle = this._backgroundClasse.BLACK;
        break;
      case this._style.PRIMARY:
        this.nbpBorderPanel = this._borderClasse.PRIMARY;
        this.nbpBackgroundTitle = this._backgroundClasse.PRIMARY;
        break;
      case this._style.TOMATO:
        this.nbpBorderPanel = this._borderClasse.TOMATO;
        this.nbpBackgroundTitle = this._backgroundClasse.TOMATO;
        break;
      case this._style.INFO:
        this.nbpBorderPanel = this._borderClasse.INFO;
        this.nbpBackgroundTitle = this._backgroundClasse.INFO;
        break;
      case this._style.SUCCESS:
        this.nbpBorderPanel = this._borderClasse.SUCCESS;
        this.nbpBackgroundTitle = this._backgroundClasse.SUCCESS;
        break;
      case this._style.WARNING:
        this.nbpBorderPanel = this._borderClasse.WARNING;
        this.nbpBackgroundTitle = this._backgroundClasse.WARNING;
        break;
      case this._style.DANGER:
        this.nbpBorderPanel = this._borderClasse.DANGER;
        this.nbpBackgroundTitle = this._backgroundClasse.DANGER;
        break;
      default:
        this.nbpBorderPanel = this._borderClasse.DEFAULT;
        this.nbpBackgroundTitle = this._backgroundClasse.DEFAULT;
        break;
    }
  }
}
