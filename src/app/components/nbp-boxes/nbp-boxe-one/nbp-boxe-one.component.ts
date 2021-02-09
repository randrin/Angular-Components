import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';
import * as moment from 'moment';

@Component({
  selector: 'nbp-boxe-one',
  templateUrl: './nbp-boxe-one.component.html',
  styleUrls: ['./nbp-boxe-one.component.scss']
})
export class NbpBoxeOneComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpBoxeTitle: string;
  @Input() nbpBoxeDescription: boolean;
  @Input() nbpBoxeImage: string;
  @Input() nbpBoxeDate: string;
  @Input() nbpBoxeUrl: string;
  
  constructor(injector: Injector) { super(injector) }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpBoxeTitle = this.nbpGetTextTruncate(this.nbpBoxeTitle, 15);
    this.nbpBoxeDescription = this.nbpGetTextTruncate(this.nbpBoxeDescription, 150);
    this.nbpBoxeDate = moment(this.nbpBoxeDate).format(this.nbpFormatDate.formatOne);
  }

}
