import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpAlertType, NbpFontSize, NbpPipe, NbpSize, NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-dividing-line-page',
  templateUrl: './nbp-dividing-line-page.component.html',
  styleUrls: ['./nbp-dividing-line-page.component.scss']
})
export class NbpDividingLinePageComponent implements OnInit {

  title = 'Dividing Line Page';

  _style = NbpStyle;
  _fontSize = NbpFontSize;
  _pipe = NbpPipe;
  _size = NbpSize;
  _alert = NbpAlertType;
  _model = new Model();

  constructor() { }

  ngOnInit(): void {
  }


  // Functions
  nbpOnClickCta(event) {
    console.log('{nbpOnClickCta}: ', event);
    // this.nbpShowPrimaryButtons = event;
  }
  
}
