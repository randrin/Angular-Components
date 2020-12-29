import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpStyle, NbpFontSize, NbpPipe, NbpSize, NbpAlertType } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-panel-title-page',
  templateUrl: './nbp-panel-title-page.component.html',
  styleUrls: ['./nbp-panel-title-page.component.scss']
})
export class NbpPanelTitlePageComponent implements OnInit {

  title = 'Panels Title Page';

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
