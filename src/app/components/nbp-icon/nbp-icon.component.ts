import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nbp-icon',
  templateUrl: './nbp-icon.component.html',
  styleUrls: ['./nbp-icon.component.scss']
})
export class NbpIconComponent implements OnInit {

  @Input() nbpIconName: string;

  nbpIcon: string;

  constructor() { }

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
