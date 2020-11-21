import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nbp-dividing-line',
  templateUrl: './nbp-dividing-line.component.html',
  styleUrls: ['./nbp-dividing-line.component.scss']
})
export class NbpDividingLineComponent implements OnInit {

  @Input() nbpTitle: string;
  @Input() nbpColorTitle: string;
  @Input() nbpCta: boolean = false;
  @Input() nbpCtaText: string = '';
  @Input() nbpCtaReadOnly: boolean = false;
  @Input() nbpColorStyle: string;

  @Output() nbpOnClickCta: EventEmitter<boolean> = new EventEmitter<boolean>();

  nbpDividingLine: string;
  nbpDividingLineColorTitle: string;
  nbpSeparator: string = ' ';

  constructor() { }

  ngOnInit(): void {
    this.nbpGetClasses();
    console.log('{NbpDividingLineComponent - this.nbpStyle}: ', this.nbpColorStyle);
  }

  nbpOnClickedCta() {
    this.nbpOnClickCta.emit(true);
  }

  nbpGetClasses() {
    this.nbpDividingLine = this.nbpGetColorClass(this.nbpColorStyle);
    this.nbpDividingLineColorTitle = this.nbpGetColorClass(this.nbpColorTitle);
  }

  nbpGetColorClass(nbpInput) {
    if (nbpInput === 'DEFAULT' || nbpInput === '' || nbpInput === undefined) {
      return 'npb-color-default';
    }
    if (nbpInput === 'PRIMARY') {
      return 'npb-color-primary';
    }
    if (nbpInput === 'DANGER') {
      return 'npb-color-tomato';
    }
  }

}
