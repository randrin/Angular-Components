import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nbp-background-box',
  templateUrl: './nbp-background-box.component.html',
  styleUrls: ['./nbp-background-box.component.scss']
})
export class NbpBackgroundBoxComponent implements OnInit {

  @Input() nbpTitle: string = '';
  @Input() nbpTitlePosition: string;
  @Input() nbpSubTitle: string;
  @Input() nbpBackgroundStyle: string;
  @Input() nbpFontSize: string;
  @Input() nbpTextTransform: string;
  @Input() nbpColorStyle: string;

  nbpBackgroundBox: string;
  nbpColorBox: string;
  nbpTitleBox: string;
  nbpSeparator: string = ' ';

  nbpBackground = {
    DEFAULT: 'npb-background-default',
    PRIMARY: 'npb-background-primary',
    TOMATO: 'npb-background-tomato'
  }

  nbpSize = {
    SMALL: 'npb-font-size-18',
    MEDIUM: 'npb-font-size-24',
    LARGE: 'npb-font-size-32'
  }

  nbpTextAlign = {
    LEFT: 'npb-text-align-left',
    CENTER: 'npb-text-align-center',
    RIGHT: 'npb-text-align-right'
  }

  nbpTransformText = {
    LOWERCASE: 'npb-text-lowercase',
    UPPERCASE: 'npb-text-uppercase'
  }

  nbpColor = {
    DEFAULT: 'npb-color-default',
    PRIMARY: 'npb-color-primary',
    TOMATO: 'npb-color-tomato',
    WHITE: 'npb-color-white'
  }

  constructor() { }

  ngOnInit(): void {
    this.nbpBackgroundBox = this.nbpGetBackgroundClass();
    this.nbpColorBox = this.nbpGetColorClass();
    this.nbpTitleBox = this.nbpGetFontSizeClass() + this.nbpSeparator + this.nbpGetTextAlignClass() + this.nbpSeparator + this.nbpGetTextTransformClass()
    console.log('{NbpBackgroundBoxComponent - this.nbpBackgroundStyle}: ', this.nbpBackgroundStyle);
  }

  nbpGetTextAlignClass() {
    if (this.nbpTitlePosition === 'LEFT' || this.nbpTitlePosition === '' || this.nbpTitlePosition === undefined) {
      return this.nbpTextAlign.LEFT;
    }
    if (this.nbpTitlePosition === 'CENTER') {
      return this.nbpTextAlign.CENTER;
    }
    if (this.nbpTitlePosition === 'RIGHT') {
      return this.nbpTextAlign.RIGHT;
    }
  }

  nbpGetBackgroundClass() {
    if (this.nbpBackgroundStyle === 'DEFAULT' || this.nbpBackgroundStyle === '' || this.nbpBackgroundStyle === undefined) {
      return this.nbpBackground.DEFAULT;
    }
    if (this.nbpBackgroundStyle === 'PRIMARY') {
      return this.nbpBackground.PRIMARY;
    }
    if (this.nbpBackgroundStyle === 'DANGER') {
      return this.nbpBackground.TOMATO;
    }
  }

  nbpGetFontSizeClass() {
    if (this.nbpFontSize === 'SMALL' || this.nbpFontSize === '' || this.nbpFontSize === undefined) {
      return this.nbpSize.SMALL;
    }
    if (this.nbpFontSize === 'MEDIUM') {
      return this.nbpSize.MEDIUM;
    }
    if (this.nbpFontSize === 'LARGE') {
      return this.nbpSize.LARGE;
    }
  }

  nbpGetTextTransformClass() {
    if (this.nbpTextTransform === 'LOWERCASE' || this.nbpTextTransform === '' || this.nbpTextTransform === undefined) {
      return this.nbpTransformText.LOWERCASE;
    }
    if (this.nbpTextTransform === 'UPPERCASE') {
      return this.nbpTransformText.UPPERCASE;
    }
  }

  nbpGetColorClass() {
    if (this.nbpColorStyle === 'DEFAULT' || this.nbpColorStyle === '' || this.nbpColorStyle === undefined) {
      return this.nbpColor.DEFAULT;
    }
    if (this.nbpColorStyle === 'PRIMARY') {
      return this.nbpColor.PRIMARY;
    }
    if (this.nbpColorStyle === 'DANGER') {
      return this.nbpColor.TOMATO;
    }
    if (this.nbpColorStyle === 'WHITE') {
      return this.nbpColor.WHITE;
    }
  }
}
