import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-breadcrumd-page',
  templateUrl: './nbp-breadcrumd-page.component.html',
  styleUrls: ['./nbp-breadcrumd-page.component.scss']
})
export class NbpBreadcrumdPageComponent implements OnInit {

  title = 'Breadcrumbs Navigation';

  _style = NbpStyle;
  _model = new Model();

  constructor() { }

  ngOnInit(): void {
  }

}
