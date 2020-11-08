import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nbp-dividing-line',
  templateUrl: './nbp-dividing-line.component.html',
  styleUrls: ['./nbp-dividing-line.component.scss']
})
export class NbpDividingLineComponent implements OnInit {

  @Input() nbpTitle: string;
  @Input() nbpCta: boolean = false;
  @Input() nbpCtaText: string = '';
  @Input() nbpCtaReadOnly: boolean = false;
  @Input() nbpColorStyle: string;

  @Output() nbpOnClickCta = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log('{NbpDividingLineComponent - this.nbpStyle}: ', this.nbpColorStyle);
  }

  nbpOnClickedCta() {
    this.nbpOnClickCta.emit('');
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
  }

}
