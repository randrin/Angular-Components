import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpAlertType, NbpFontSize, NbpPipe, NbpSize, NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'app-composants',
  templateUrl: './composants.component.html',
  styleUrls: ['./composants.component.scss']
})
export class ComposantsComponent implements OnInit {

  title = 'Nbp Composants';

  _style = NbpStyle;
  _fontSize = NbpFontSize;
  _pipe = NbpPipe;
  _size = NbpSize;
  _alert = NbpAlertType;
  _model = new Model();

  nbpShowPrimaryButtons: boolean;
  nbpAlertClose: boolean;
  model: string;

  constructor() { }

  ngOnInit(): void {
  }


  // Functions
  nbpInputModel(event) {
    this.model = event;
  }

  nbpOnClickCta(event) {
    console.log('{nbpOnClickCta}: ', event);
    this.nbpShowPrimaryButtons = event;
  }

  nbpOnClickClose(event) {
    console.log('{nbpOnClickClose}: ', this.nbpAlertClose);
    this.nbpAlertClose = event;
  }

}
