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
    if(this.nbpButtonForm === this._style.ROUNDED) {
      return this._styleClasse.ROUNDED;
    }
  }

  nbpGetColorClass() {
    if (this.nbpColorStyle === this._style.DEFAULT || this.nbpColorStyle === '' || this.nbpColorStyle === undefined) {
      return this._styleClasse.DEFAULT;
    }
    if (this.nbpColorStyle === this._style.PRIMARY) {
      return this._styleClasse.PRIMARY;
    }
    if (this.nbpColorStyle === this._style.DANGER) {
      return this._styleClasse.DANGER;
    }
  }

  nbpGetStyleClass() {
    if (this.nbpStyleType === this._style.ROUNDED) {
      return this._styleClasse.ROUNDED;
    }
    if (this.nbpStyleType === this._style.OUTLINE) {
      if (this.nbpColorStyle === this._style.DEFAULT || this.nbpColorStyle === '' || this.nbpColorStyle === undefined) {
        return this._styleClasse.OUTLINE_DEFAULT;
      }
      if (this.nbpColorStyle === this._style.PRIMARY) {
        return this._styleClasse.OUTLINE_PRIMARY;
      }
      if (this.nbpColorStyle === this._style.DANGER) {
        return this._styleClasse.OUTLINE_DANGER;
      }
    }
  }

  nbpGetSizeClass() {
    if (this.nbpSize === this._size.SM || this.nbpSize === '' || this.nbpSize === undefined) {
      return this._sizeClasse.SMALL;
    }
    if (this.nbpSize === this._size.MD) {
      return this._sizeClasse.MEDIUM;
    }
    if (this.nbpSize === this._size.LG) {
      return this._sizeClasse.LARGE;
    }
  }
}
