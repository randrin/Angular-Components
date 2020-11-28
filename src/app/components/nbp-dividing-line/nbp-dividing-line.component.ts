import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() nbpCtaTextShow: string = '';
  @Input() nbpCtaTextHide: string = '';
  @Input() nbpCtaReadOnly: boolean = false;
  @Input() nbpColorStyle: string;

  @Output() nbpOnClickCta: EventEmitter<boolean> = new EventEmitter<boolean>();

  _style = NbpStyle;
  
  nbpDividingLine: string;
  nbpDividingLineColorTitle: string;
  nbpSeparator: string = ' ';
  nbpCtaText: string;
  nbpShowHide: boolean = false;

  nbpColor = {
    DEFAULT: 'npb-color-default',
    PRIMARY: 'npb-color-primary',
    TOMATO: 'npb-color-tomato',
    WHITE: 'npb-color-white'
  }

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
    this.nbpDividingLineColorTitle = this.nbpGetColorClass(this.nbpColorTitle);
  }

  nbpGetColorClass(nbpInput) {
    if (nbpInput === this._style.DEFAULT || nbpInput === '' || nbpInput === undefined) {
      return this.nbpColor.DEFAULT;
    }
    if (nbpInput === this._style.PRIMARY) {
      return this.nbpColor.PRIMARY;
    }
    if (nbpInput === this._style.DANGER) {
      return this.nbpColor.TOMATO;
    }
  }

}
