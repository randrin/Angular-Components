import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-icon',
  templateUrl: './nbp-icon.component.html',
  styleUrls: ['./nbp-icon.component.scss']
})
export class NbpIconComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpIconName: string;

  nbpIcon: string;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpIcon = 'fa-' + this.nbpIconSplit(this.nbpIconName);;
  }

  nbpIconSplit(nbpInput) {
    let arraySplit = [];
    arraySplit = nbpInput.split('-');
    if (arraySplit.length > 3) {
      let arraySplitNew = [];
      arraySplit.forEach((elt, index) => {
        if (index !== 0 && index !== 1) {
          arraySplitNew.push(elt)
        }
      });
      return arraySplitNew.join('-');
    } else {
      return arraySplit[2];
    }
  }
}
