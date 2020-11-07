import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbpStyle } from '../../../assets/utils/nbp-commons/nbp-commons.enums';

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
  @Input() nbpStyle: string;

  @Output() nbpOnClickCta = new EventEmitter<any>();

  _style = NbpStyle;

  constructor() { }

  ngOnInit(): void {
    console.log('{NbpDividingLineComponent - this.nbpStyle}: ', this.nbpStyle);
  }

  nbpOnClickedCta() {
    this.nbpOnClickCta.emit('');
  }

  nbpGetCustomizeClass() {
    if (this.nbpStyle === 'DEFAULT' || this.nbpStyle === '' || undefined) {
      return 'npb-color-default';
    }
    if (this.nbpStyle === 'PRIMARY') {
      return 'npb-color-primary';
    }
    if (this.nbpStyle === 'DANGER') {
      return 'npb-color-tomato';
    }
  }

}
