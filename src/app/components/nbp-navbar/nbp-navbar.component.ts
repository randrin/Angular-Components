import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpAlertType, NbpFontSize, NbpPipe, NbpSize, NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-navbar',
  templateUrl: './nbp-navbar.component.html',
  styleUrls: ['./nbp-navbar.component.scss']
})
export class NbpNavbarComponent implements OnInit {

  items = [
    {
      title: "Buttons",
      link: "/composants/button"
    },
    {
      title: "Feedback Messages",
      link: "/composants/feedback"
    },
    {
      title: "Alerts Box",
      link: "/composants/alert-box"
    },
    {
      title: "Input Text",
      link: "/composants/input-text"
    }
  ];

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
