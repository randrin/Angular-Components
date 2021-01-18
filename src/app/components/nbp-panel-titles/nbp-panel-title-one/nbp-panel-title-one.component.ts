import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBorderColorClasse, NbpPanelTitlePositionClasse } from 'src/assets/utils/nbp-commons/nbp-commons.classes';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-panel-title-one',
  templateUrl: './nbp-panel-title-one.component.html',
  styleUrls: ['./nbp-panel-title-one.component.scss']
})
export class NbpPanelTitleOneComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpPanelTitle: string;
  @Input() nbpPanelTitleStyle: string;
  @Input() nbpPanelTitlePosition: string;

  nbpTitle: string;
  nbpBorderPanel: string;
  nbpBackgroundTitle: string;
  nbpPositionTitle: string;

  constructor(injector: Injector) {
    super(injector);
  }

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
        this.nbpBorderPanel = this._borderColorClasse.DEFAULT;
        this.nbpBackgroundTitle = this._backgroundClasse.DEFAULT;
        break;
      case this._style.WHITE:
        this.nbpBorderPanel = this._borderColorClasse.WHITE;
        this.nbpBackgroundTitle = this._backgroundClasse.WHITE;
        break;
      case this._style.WHITE_SMOKE:
        this.nbpBorderPanel = this._borderColorClasse.WHITE_SMOKE;
        this.nbpBackgroundTitle = this._backgroundClasse.WHITE_SMOKE;
        break;
      case this._style.WARM_GRAY_20:
        this.nbpBorderPanel = this._borderColorClasse.WARM_GRAY_20;
        this.nbpBackgroundTitle = this._backgroundClasse.WARM_GRAY_20;
        break;
      case this._style.NIGHT_RIDER:
        this.nbpBorderPanel = this._borderColorClasse.NIGHT_RIDER;
        this.nbpBackgroundTitle = this._backgroundClasse.NIGHT_RIDER;
        break;
      case this._style.SLIVER:
        this.nbpBorderPanel = this._borderColorClasse.SLIVER;
        this.nbpBackgroundTitle = this._backgroundClasse.SLIVER;
        break;
      case this._style.BLACK:
        this.nbpBorderPanel = this._borderColorClasse.BLACK;
        this.nbpBackgroundTitle = this._backgroundClasse.BLACK;
        break;
      case this._style.PRIMARY:
        this.nbpBorderPanel = this._borderColorClasse.PRIMARY;
        this.nbpBackgroundTitle = this._backgroundClasse.PRIMARY;
        break;
      case this._style.TOMATO:
        this.nbpBorderPanel = this._borderColorClasse.TOMATO;
        this.nbpBackgroundTitle = this._backgroundClasse.TOMATO;
        break;
      case this._style.INFO:
        this.nbpBorderPanel = this._borderColorClasse.INFO;
        this.nbpBackgroundTitle = this._backgroundClasse.INFO;
        break;
      case this._style.SUCCESS:
        this.nbpBorderPanel = this._borderColorClasse.SUCCESS;
        this.nbpBackgroundTitle = this._backgroundClasse.SUCCESS;
        break;
      case this._style.WARNING:
        this.nbpBorderPanel = this._borderColorClasse.WARNING;
        this.nbpBackgroundTitle = this._backgroundClasse.WARNING;
        break;
      case this._style.DANGER:
        this.nbpBorderPanel = this._borderColorClasse.DANGER;
        this.nbpBackgroundTitle = this._backgroundClasse.DANGER;
        break;
      default:
        this.nbpBorderPanel = this._borderColorClasse.DEFAULT;
        this.nbpBackgroundTitle = this._backgroundClasse.DEFAULT;
        break;
    }
  }
}
