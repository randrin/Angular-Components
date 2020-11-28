import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nbp-button',
  templateUrl: './nbp-button.component.html',
  styleUrls: ['./nbp-button.component.scss']
})
export class NbpButtonComponent implements OnInit {

  @Input() nbpLabel: string;
  @Input() nbpColorStyle: string;
  @Input() nbpStyleType: string;
  @Input() nbpSize: string;
  @Input() nbpDisabled: boolean = false;

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
    this.nbpGetClasses();
  }

  nbpGetClasses() {
    this.nbpButton = this.nbpGetColorClass() + this.nbpSeparator + this.nbpGetStyleClass() + this.nbpSeparator + this.nbpGetSizeClass();
  }

  nbpGetColorClass() {
    if (this.nbpColorStyle === 'DEFAULT' || this.nbpColorStyle === '' || this.nbpColorStyle === undefined) {
      return this.nbpButtonType.DEFAULT;
    }
    if (this.nbpColorStyle === 'PRIMARY') {
      return this.nbpButtonType.PRIMARY;
    }
    if (this.nbpColorStyle === 'DANGER') {
      return this.nbpButtonType.DANGER;
    }
  }

  nbpGetStyleClass() {
    if (this.nbpStyleType === 'ROUNDED') {
      return this.nbpButtonType.ROUNDED;
    }
    if (this.nbpStyleType === 'OUTLINE') {
      if (this.nbpColorStyle === 'DEFAULT' || this.nbpColorStyle === '' || this.nbpColorStyle === undefined) {
        return this.nbpButtonType.OUTLINE_DEFAULT;
      }
      if (this.nbpColorStyle === 'PRIMARY') {
        return this.nbpButtonType.OUTLINE_PRIMARY;
      }
      if (this.nbpColorStyle === 'DANGER') {
        return this.nbpButtonType.OUTLINE_DANGER;
      }
    }
  }

  nbpGetSizeClass() {
    if (this.nbpSize === 'SM' || this.nbpSize === '' || this.nbpSize === undefined) {
      return this.nbpButtonType.SMALL;
    }
    if (this.nbpSize === 'MD') {
      return this.nbpButtonType.MEDIUM;
    }
    if (this.nbpSize === 'LG') {
      return this.nbpButtonType.LARGE;
    }
  }
}
