import { Component, Input, OnInit } from '@angular/core';
import { NbpSizeClasse, NbpStyleClasse } from 'src/assets/utils/nbp-commons/nbp-commons.classes';
import { NbpSize, NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-button',
  templateUrl: './nbp-button.component.html',
  styleUrls: ['./nbp-button.component.scss']
})
export class NbpButtonComponent implements OnInit {

  @Input() nbpLabel: string;
  @Input() nbpColorStyle: string;
  @Input() nbpStyleType: string;
  @Input() nbpButtonForm: string;
  @Input() nbpSize: string;
  @Input() nbpDisabled: boolean = false;

  _style = NbpStyle;
  _styleClasse = NbpStyleClasse;
  _size = NbpSize;
  _sizeClasse = NbpSizeClasse;

  nbpButton: string;
  nbpSeparator: string = ' ';

  constructor() { }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  nbpSetUpComponent() {
    this.nbpGetClasses()
  }

  nbpGetClasses() {
    this.nbpButton = this.nbpGetColorClass() + this.nbpSeparator + this.nbpGetStyleClass()
      + this.nbpSeparator + this.nbpGetSizeClass() + this.nbpSeparator + this.nbpGetFormClass();
  }

  nbpGetFormClass() {
    if (this.nbpButtonForm === this._style.ROUNDED) {
      return this._styleClasse.ROUNDED;
    }
  }

  nbpGetColorClass() {
    switch (this.nbpColorStyle) {
      case this._style.DEFAULT:
        return this._styleClasse.DEFAULT;
        break;
      case this._style.PRIMARY:
        return this._styleClasse.PRIMARY;
        break;
      case this._style.PRIMARYHOVER:
        return this._styleClasse.PRIMARY_HOVER;
        break;
      case this._style.DANGER:
        return this._styleClasse.DANGER;
        break;
      default:
        return this._styleClasse.DEFAULT;
        break;
    }
  }

  nbpGetStyleClass() {
    switch (this.nbpStyleType) {
      case this._style.ROUNDED:
        return this._styleClasse.ROUNDED;
        break;
      case this._style.OUTLINE:
        switch (this.nbpColorStyle) {
          case this._style.DEFAULT:
            return this._styleClasse.OUTLINE_DEFAULT;
            break;
          case this._style.PRIMARY:
            return this._styleClasse.OUTLINE_PRIMARY;
            break;
          case this._style.PRIMARYHOVER:
            return this._styleClasse.OUTLINE_PRIMARY_HOVER;
            break;
          case this._style.DANGER:
            return this._styleClasse.OUTLINE_DANGER;
            break;
          default:
            return this._styleClasse.OUTLINE_DEFAULT;
            break;
        }
    }
  }

  nbpGetSizeClass() {
    switch (this.nbpSize) {
      case this._size.SM:
        return this._sizeClasse.SMALL;
        break;
      case this._size.MD:
        return this._sizeClasse.MEDIUM;
        break;
      case this._size.LG:
        return this._sizeClasse.LARGE;
        break;
      default:
        return this._sizeClasse.SMALL;
        break;
    }
  }
}
