import { Component, Input, OnInit, Injector } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-background-box',
  templateUrl: './nbp-background-box.component.html',
  styleUrls: ['./nbp-background-box.component.scss']
})
export class NbpBackgroundBoxComponent extends NbpBaseComponent implements OnInit {

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

  // nbpBackground = {
  //   DEFAULT: 'nbp-background-white-smoke',
  //   PRIMARY: 'nbp-background-primary',
  //   TOMATO: 'nbp-background-tomato'
  // }

  nbpSize = {
    SMALL: 'nbp-font-size-18',
    MEDIUM: 'nbp-font-size-24',
    LARGE: 'nbp-font-size-32'
  }

  nbpTextAlign = {
    LEFT: 'nbp-text-align-left',
    CENTER: 'nbp-text-align-center',
    RIGHT: 'nbp-text-align-right'
  }

  nbpTransformText = {
    LOWERCASE: 'nbp-text-lowercase',
    UPPERCASE: 'nbp-text-uppercase'
  }


  // nbpColor = {
  //   DEFAULT: 'nbp-color-default',
  //   PRIMARY: 'nbp-color-primary',
  //   TOMATO: 'nbp-color-tomato',
  //   WHITE: 'nbp-color-white'
  // }

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpBackgroundBox = this.nbpGetBackgroundClasse(this.nbpBackgroundStyle);
    this.nbpColorBox = this.nbpGetColorClasse(this.nbpColorStyle);
    this.nbpTitleBox = this.nbpGetFontSizeClass() + this.nbpSeparator + this.nbpGetTextAlignClass() + this.nbpSeparator + this.nbpGetTextTransformClasse(this.nbpTextTransform);
  }

  nbpGetTextAlignClass() {
    if (this.nbpTitlePosition === this._style.LEFT || this.nbpTitlePosition === '' || this.nbpTitlePosition === undefined) {
      return this.nbpTextAlign.LEFT;
    }
    if (this.nbpTitlePosition === this._style.CENTER) {
      return this.nbpTextAlign.CENTER;
    }
    if (this.nbpTitlePosition === this._style.RIGHT) {
      return this.nbpTextAlign.RIGHT;
    }
  }

  // nbpGetBackgroundClass() {
  //   if (this.nbpBackgroundStyle === this._style.DEFAULT || this.nbpBackgroundStyle === '' || this.nbpBackgroundStyle === undefined) {
  //     return this.nbpBackground.DEFAULT;
  //   }
  //   if (this.nbpBackgroundStyle === this._style.PRIMARY) {
  //     return this.nbpBackground.PRIMARY;
  //   }
  //   if (this.nbpBackgroundStyle === this._style.DANGER) {
  //     return this.nbpBackground.TOMATO;
  //   }
  // }

  nbpGetFontSizeClass() {
    if (this.nbpFontSize === this._fontSize.SMALL || this.nbpFontSize === '' || this.nbpFontSize === undefined) {
      return this.nbpSize.SMALL;
    }
    if (this.nbpFontSize === this._fontSize.MEDIUM) {
      return this.nbpSize.MEDIUM;
    }
    if (this.nbpFontSize === this._fontSize.LARGE) {
      return this.nbpSize.LARGE;
    }
  }

  // nbpGetTextTransformClass() {
  //   if (this.nbpTextTransform === this._pipe.LOWERCASE || this.nbpTextTransform === '' || this.nbpTextTransform === undefined) {
  //     return this.nbpTransformText.LOWERCASE;
  //   }
  //   if (this.nbpTextTransform === this._pipe.UPPERCASE) {
  //     return this.nbpTransformText.UPPERCASE;
  //   }
  // }

  // nbpGetColorClass() {
  //   if (this.nbpColorStyle === this._style.DEFAULT || this.nbpColorStyle === '' || this.nbpColorStyle === undefined) {
  //     return this.nbpColor.DEFAULT;
  //   }
  //   if (this.nbpColorStyle === this._style.PRIMARY) {
  //     return this.nbpColor.PRIMARY;
  //   }
  //   if (this.nbpColorStyle === this._style.DANGER) {
  //     return this.nbpColor.TOMATO;
  //   }
  //   if (this.nbpColorStyle === this._style.WHITE) {
  //     return this.nbpColor.WHITE;
  //   }
  // }
}
