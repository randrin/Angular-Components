import { Component } from '@angular/core';
import { NbpAlertType, NbpFontSize, NbpPipe, NbpSize, NbpStyle } from '../assets/utils/nbp-commons/nbp-commons.enums';
import { Model } from './models/model';

@Component({
  selector: 'nbp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Angular Components';

  _style = NbpStyle;
  _fontSize = NbpFontSize;
  _pipe = NbpPipe;
  _size = NbpSize;
  _alert = NbpAlertType;
  _model = new Model();

  constructor() { }

  ngOnInit(): void {
  }

  nbpCheckBoxModel(event) {
    console.log(event);
  }
  
}