import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpAlertType, NbpFontSize, NbpPipe, NbpSize, NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-input-text-page',
  templateUrl: './nbp-input-text-page.component.html',
  styleUrls: ['./nbp-input-text-page.component.scss']
})
export class NbpInputTextPageComponent implements OnInit {

  title = 'Input Text Page';

  _style = NbpStyle;
  _fontSize = NbpFontSize;
  _pipe = NbpPipe;
  _size = NbpSize;
  _alert = NbpAlertType;
  _model = new Model();

  model: string;

  constructor() { }

  ngOnInit(): void {
  }


  // Functions
  nbpInputModel(event) {
    this.model = event;
  }

}
