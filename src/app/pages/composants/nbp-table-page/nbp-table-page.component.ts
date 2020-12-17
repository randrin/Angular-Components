import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpStyle, NbpFontSize, NbpPipe, NbpSize, NbpAlertType } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-table-page',
  templateUrl: './nbp-table-page.component.html',
  styleUrls: ['./nbp-table-page.component.scss']
})
export class NbpTablePageComponent implements OnInit {

  title = 'Tables Page';

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
