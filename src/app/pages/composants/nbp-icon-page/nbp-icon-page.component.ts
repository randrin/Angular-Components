import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpStyle, NbpSize } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-icon-page',
  templateUrl: './nbp-icon-page.component.html',
  styleUrls: ['./nbp-icon-page.component.scss']
})
export class NbpIconPageComponent implements OnInit {

  title = 'Icons Page';

  _style = NbpStyle;
  _size = NbpSize;
  _model = new Model();

  constructor() { }

  ngOnInit(): void {
  }

  // Functions
  getIconName(icon) {
    return icon.toString();
  }
}
