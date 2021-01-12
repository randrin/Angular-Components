import { Component, OnInit } from '@angular/core';
import { NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-input-radio-page',
  templateUrl: './nbp-input-radio-page.component.html',
  styleUrls: ['./nbp-input-radio-page.component.scss']
})
export class NbpInputRadioPageComponent implements OnInit {

  title = 'Input Radios Page';

  _style = NbpStyle;

  constructor() { }

  ngOnInit(): void {
  }

}
