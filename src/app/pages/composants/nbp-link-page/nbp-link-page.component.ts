import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpStyle, NbpSize, NbpPipe } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-link-page',
  templateUrl: './nbp-link-page.component.html',
  styleUrls: ['./nbp-link-page.component.scss']
})
export class NbpLinkPageComponent implements OnInit {

  title1 = 'Deep Links Page';
  title2 = 'Arrow Links Page';

  _style = NbpStyle;
  _size = NbpSize;
  _pipe = NbpPipe;
  _model = new Model();
  
  constructor() { }

  ngOnInit(): void {
  }

}
