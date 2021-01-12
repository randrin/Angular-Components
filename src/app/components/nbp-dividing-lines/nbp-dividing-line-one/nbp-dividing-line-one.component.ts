import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-dividing-line-one',
  templateUrl: './nbp-dividing-line-one.component.html',
  styleUrls: ['./nbp-dividing-line-one.component.scss']
})
export class NbpDividingLineOneComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpTitle: string;
  @Input() nbpColorTitle: string;
  @Input() nbpCta: boolean;
  @Input() nbpUppercaseTitle: string;
  @Input() nbpCtaTextShow: string;
  @Input() nbpCtaTextHide: string;
  @Input() nbpCtaReadOnly: boolean;
  @Input() nbpColorStyle: string;

  @Output() nbpOnClickCta: EventEmitter<boolean> = new EventEmitter<boolean>();

  nbpDividingLine: string;
  nbpDividingLineColorTitle: string;
  nbpCtaText: string;
  nbpShowHide: boolean;

  constructor(injector: Injector) { super(injector); }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpCtaText = this.nbpShowHide ? this.nbpCtaTextHide : this.nbpCtaTextShow;
    this.nbpGetClasses();
  }

  nbpOnClickedCta() {
    this.nbpShowHide = !this.nbpShowHide;
    this.nbpSetUpComponent();
    this.nbpOnClickCta.emit(this.nbpShowHide);
  }

  nbpGetClasses() {
    this.nbpDividingLine = this.nbpGetColorClasse(this.nbpColorStyle);
    this.nbpDividingLineColorTitle = this.nbpGetColorClasse(this.nbpColorTitle) + this.nbpSeparator + this.nbpGetTextTransformClasse(this.nbpUppercaseTitle);
  }

  // nbpGetTextTransform() {
  //   return this.nbpUppercaseTitle ? this._textTransformClasse.UPPERCASE : this._textTransformClasse.CAPITALIZE;
  // }
}
