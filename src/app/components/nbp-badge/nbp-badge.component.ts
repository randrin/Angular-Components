import { Component, Input, OnInit } from '@angular/core';
import { NbpBadgeStyleClasse } from 'src/assets/utils/nbp-commons/nbp-commons.classes';
import { NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-badge',
  templateUrl: './nbp-badge.component.html',
  styleUrls: ['./nbp-badge.component.scss']
})
export class NbpBadgeComponent implements OnInit {

  @Input() nbpBadgeName: string;
  @Input() nbpBadgeIcon: string;
  @Input() nbpBadgeStyle: string;

  _style = NbpStyle;
  _badgeStyleClasse = NbpBadgeStyleClasse;

  nbpBadge: string;
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
    this.nbpBadge = this.nbpGetBadgeStyle(this.nbpBadgeStyle);
  }

  nbpGetBadgeStyle(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
        return this._badgeStyleClasse.DEFAULT;
        break;
      case this._style.WHITE:
        return this._badgeStyleClasse.WHITE;
        break;
      case this._style.WHITE_SMOKE:
        return this._badgeStyleClasse.WHITE_SMOKE;
        break;
      case this._style.WARM_GRAY_20:
        return this._badgeStyleClasse.WARM_GRAY_20;
        break;
      case this._style.NIGHT_RIDER:
        return this._badgeStyleClasse.NIGHT_RIDER;
        break;
      case this._style.SLIVER:
        return this._badgeStyleClasse.SLIVER;
        break;
      case this._style.BLACK:
        return this._badgeStyleClasse.BLACK;
        break;
      case this._style.PRIMARY:
        return this._badgeStyleClasse.PRIMARY;
        break;
      case this._style.TOMATO:
        return this._badgeStyleClasse.TOMATO;
        break;
      case this._style.INFO:
        return this._badgeStyleClasse.INFO;
        break;
      case this._style.SUCCESS:
        return this._badgeStyleClasse.SUCCESS;
        break;
      case this._style.WARNING:
        return this._badgeStyleClasse.WARNING;
        break;
      case this._style.DANGER:
        return this._badgeStyleClasse.DANGER;
        break;
      default:
        return this._badgeStyleClasse.DEFAULT;
        break;
    }
  }
}
