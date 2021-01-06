import { Component, OnInit } from '@angular/core';
import { NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-radio-page',
  templateUrl: './nbp-radio-page.component.html',
  styleUrls: ['./nbp-radio-page.component.scss']
})
export class NbpRadioPageComponent implements OnInit {

  title = 'Input Radios Page';

  _style = NbpStyle;

  constructor() { }

  ngOnInit(): void {
  }

}
