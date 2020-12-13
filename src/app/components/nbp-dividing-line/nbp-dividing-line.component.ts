import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbpColorClasse, NbpTransformClasse } from 'src/assets/utils/nbp-commons/nbp-commons.classes';
import { NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-dividing-line',
  templateUrl: './nbp-dividing-line.component.html',
  styleUrls: ['./nbp-dividing-line.component.scss']
})
export class NbpDividingLineComponent implements OnInit {

  @Input() nbpTitle: string;
  @Input() nbpColorTitle: string;
  @Input() nbpCta: boolean = false;
  @Input() nbpUppercaseTitle: boolean = false;
  @Input() nbpCtaTextShow: string = '';
  @Input() nbpCtaTextHide: string = '';
  @Input() nbpCtaReadOnly: boolean = false;
  @Input() nbpColorStyle: string;

  @Output() nbpOnClickCta: EventEmitter<boolean> = new EventEmitter<boolean>();

  _style = NbpStyle;
  _colorClasse = NbpColorClasse;
  _transformClasse = NbpTransformClasse;

  nbpDividingLine: string;
  nbpDividingLineColorTitle: string;
  nbpSeparator: string = ' ';
  nbpCtaText: string;
  nbpShowHide: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.nbpSetUpComponent();
    this.nbpGetClasses();
    console.log('{NbpDividingLineComponent - this.nbpColorStyle}: ', this.nbpColorStyle);
  }

  nbpSetUpComponent() {
    this.nbpCtaText = this.nbpShowHide ? this.nbpCtaTextHide : this.nbpCtaTextShow;
  }

  nbpOnClickedCta() {
    this.nbpShowHide = !this.nbpShowHide;
    this.nbpSetUpComponent();
    this.nbpOnClickCta.emit(this.nbpShowHide);
  }

  nbpGetClasses() {
    this.nbpDividingLine = this.nbpGetColorClass(this.nbpColorStyle);
    this.nbpDividingLineColorTitle = this.nbpGetColorClass(this.nbpColorTitle) + this.nbpSeparator + this.nbpGetTextTransform();
  }

  nbpGetTextTransform() {
    return this.nbpUppercaseTitle ? this._transformClasse.UPPERCASE : this._transformClasse.CAPITALIZE;
  }

  nbpGetColorClass(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
        return this._colorClasse.DEFAULT;
        break;
      case this._style.PRIMARY:
        return this._colorClasse.PRIMARY;
        break;
      case this._style.DANGER:
        return this._colorClasse.DANGER;
        break;
      case this._style.WARNING:
        return this._colorClasse.WARNING;
        break;
      case this._style.INFO:
        return this._colorClasse.INFO;
        break;
      case this._style.TOMATO:
        return this._colorClasse.TOMATO;
        break;
      case this._style.WHITE:
        return this._colorClasse.WHITE;
        break;
      case this._style.SUCCESS:
        return this._colorClasse.SUCCESS;
        break;
        default:
          return this._colorClasse.DEFAULT;
        break;
    }
  }

}
