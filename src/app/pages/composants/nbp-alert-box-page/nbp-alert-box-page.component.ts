import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpAlertType, NbpFontSize, NbpPipe, NbpSize, NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';


@Component({
  selector: 'nbp-alert-box-page',
  templateUrl: './nbp-alert-box-page.component.html',
  styleUrls: ['./nbp-alert-box-page.component.scss']
})
export class NbpAlertBoxPageComponent implements OnInit {

  title1 = 'Alert Box 1 Page';
  title2 = 'Alert Box 2 Page';

  _style = NbpStyle;
  _fontSize = NbpFontSize;
  _pipe = NbpPipe;
  _size = NbpSize;
  _alert = NbpAlertType;
  _model = new Model();

  nbpAlertClose: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  // Functions
  nbpOnClickClose(event) {
    console.log('{nbpOnClickClose}: ', this.nbpAlertClose);
    this.nbpAlertClose = event;
  }

}
