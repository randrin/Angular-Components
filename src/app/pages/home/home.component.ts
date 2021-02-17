import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpAlertType, NbpFontSize, NbpPipe, NbpSize, NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Nbp Home';

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
