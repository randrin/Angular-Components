import { Component, OnInit } from '@angular/core';
import { NbpAlertType, NbpFontSize, NbpPipe, NbpSize, NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';
import { Model } from 'src/app/models/model';

@Component({
  selector: 'nbp-textarea-page',
  templateUrl: './nbp-textarea-page.component.html',
  styleUrls: ['./nbp-textarea-page.component.scss']
})
export class NbpTextareaPageComponent implements OnInit {

  title = 'Textarea Page';

  _style = NbpStyle;
  _fontSize = NbpFontSize;
  _pipe = NbpPipe;
  _size = NbpSize;
  _alert = NbpAlertType;
  _model = new Model();

  constructor() { }

  ngOnInit(): void {
  }

}
