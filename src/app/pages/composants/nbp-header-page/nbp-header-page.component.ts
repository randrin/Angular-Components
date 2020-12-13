import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpSize, NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'app-nbp-header-page',
  templateUrl: './nbp-header-page.component.html',
  styleUrls: ['./nbp-header-page.component.scss']
})
export class NbpHeaderPageComponent implements OnInit {

  title = 'Headers Page';

  _style = NbpStyle;
  _size = NbpSize;
  _model = new Model();

  constructor() { }

  ngOnInit(): void {
  }

}
