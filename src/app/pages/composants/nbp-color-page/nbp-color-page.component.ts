import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-color-page',
  templateUrl: './nbp-color-page.component.html',
  styleUrls: ['./nbp-color-page.component.scss']
})
export class NbpColorPageComponent implements OnInit {

  title = 'Color Styles';

  _style = NbpStyle;
  _model = new Model();

  constructor() { }

  ngOnInit(): void {
  }

}
