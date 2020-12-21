import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpAlertType, NbpFontSize, NbpPipe, NbpSize, NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-feedback-page',
  templateUrl: './nbp-feedback-page.component.html',
  styleUrls: ['./nbp-feedback-page.component.scss']
})
export class NbpFeedbackPageComponent implements OnInit {

  title = 'Feedback Page';

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

}
