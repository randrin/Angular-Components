import { Component, Input, OnInit } from '@angular/core';
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
  _size = NbpSize;
  
  nbpButton: string;
  nbpSeparator: string = ' ';

  nbpButtonType = {
    DEFAULT: 'npb-button-default',
    PRIMARY: 'npb-button-primary',
    DANGER: 'npb-button-danger',
    ROUNDED: 'npb-button-rounded',
    OUTLINE_DEFAULT: 'npb-button-outline-default',
    OUTLINE_PRIMARY: 'npb-button-outline-primary',
    OUTLINE_DANGER: 'npb-button-outline-danger',
    SMALL: 'npb-button-small',
    MEDIUM: 'npb-button-medium',
    LARGE: 'npb-button-large'
  }

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
      return this.nbpButtonType.ROUNDED;
    }
  }

  nbpGetColorClass() {
    if (this.nbpColorStyle === this._style.DEFAULT || this.nbpColorStyle === '' || this.nbpColorStyle === undefined) {
      return this.nbpButtonType.DEFAULT;
    }
    if (this.nbpColorStyle === this._style.PRIMARY) {
      return this.nbpButtonType.PRIMARY;
    }
    if (this.nbpColorStyle === this._style.DANGER) {
      return this.nbpButtonType.DANGER;
    }
  }

  nbpGetStyleClass() {
    if (this.nbpStyleType === this._style.ROUNDED) {
      return this.nbpButtonType.ROUNDED;
    }
    if (this.nbpStyleType === this._style.OUTLINE) {
      if (this.nbpColorStyle === this._style.DEFAULT || this.nbpColorStyle === '' || this.nbpColorStyle === undefined) {
        return this.nbpButtonType.OUTLINE_DEFAULT;
      }
      if (this.nbpColorStyle === this._style.PRIMARY) {
        return this.nbpButtonType.OUTLINE_PRIMARY;
      }
      if (this.nbpColorStyle === this._style.DANGER) {
        return this.nbpButtonType.OUTLINE_DANGER;
      }
    }
  }

  nbpGetSizeClass() {
    if (this.nbpSize === this._size.SM || this.nbpSize === '' || this.nbpSize === undefined) {
      return this.nbpButtonType.SMALL;
    }
    if (this.nbpSize === this._size.MD) {
      return this.nbpButtonType.MEDIUM;
    }
    if (this.nbpSize === this._size.LG) {
      return this.nbpButtonType.LARGE;
    }
  }
}
