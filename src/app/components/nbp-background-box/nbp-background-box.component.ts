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

  constructor() { }

  ngOnInit(): void {
    console.log('{NbpBackgroundBoxComponent - this.nbpBackgroundStyle}: ', this.nbpBackgroundStyle);
  }

  nbpGetTextAlignClass() {
    if (this.nbpTitlePosition === 'LEFT' || this.nbpTitlePosition === '' || this.nbpTitlePosition === undefined) {
      return 'npb-text-align-left';
    }
    if (this.nbpTitlePosition === 'CENTER') {
      return 'npb-text-align-center';
    }
    if (this.nbpTitlePosition === 'RIGHT') {
      return 'npb-text-align-right';
    }
  }

  nbpGetBackgroundClass() {
    if (this.nbpBackgroundStyle === 'DEFAULT' || this.nbpBackgroundStyle === '' || this.nbpBackgroundStyle === undefined) {
      return 'npb-background-default';
    }
    if (this.nbpBackgroundStyle === 'PRIMARY') {
      return 'npb-background-primary';
    }
    if (this.nbpBackgroundStyle === 'DANGER') {
      return 'npb-background-tomato';
    }
  }

  nbpGetFontSizeClass() {
    if (this.nbpFontSize === 'SMALL' || this.nbpFontSize === '' || this.nbpFontSize === undefined) {
      return 'npb-font-size-18';
    }
    if (this.nbpFontSize === 'MEDIUM') {
      return 'npb-font-size-24';
    }
    if (this.nbpFontSize === 'LARGE') {
      return 'npb-font-size-32';
    }
  }

  nbpGetTextTransformClass() {
    if (this.nbpTextTransform === 'LOWERCASE' || this.nbpTextTransform === '' || this.nbpTextTransform === undefined) {
      return 'npb-text-lowercase';
    }
    if (this.nbpTextTransform === 'UPPERCASE') {
      return 'npb-text-uppercase';
    }
  }

  nbpGetColorClass() {
    if (this.nbpColorStyle === 'DEFAULT' || this.nbpColorStyle === '' || this.nbpColorStyle === undefined) {
      return 'npb-color-default';
    }
    if (this.nbpColorStyle === 'PRIMARY') {
      return 'npb-color-primary';
    }
    if (this.nbpColorStyle === 'DANGER') {
      return 'npb-color-tomato';
    }
    if (this.nbpColorStyle === 'WHITE') {
      return 'npb-color-white';
    }
  }
}
