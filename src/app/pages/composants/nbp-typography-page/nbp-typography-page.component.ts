import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpStyle, NbpFontSize, NbpPipe, NbpSize, NbpAlertType } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-typography-page',
  templateUrl: './nbp-typography-page.component.html',
  styleUrls: ['./nbp-typography-page.component.scss']
})
export class NbpTypographyPageComponent implements OnInit {

  title1 = 'Typographies Page';
  title2 = 'Typographies Page with Background Black';
  title3 = 'Typographies Paragraphs';
  title4 = 'Typographies Paragraphs with Background Black';

  _style = NbpStyle;
  _fontSize = NbpFontSize;
  _pipe = NbpPipe;
  _size = NbpSize;
  _alert = NbpAlertType;
  _model = new Model();

  typographies = [
    { name: 'Default', classe: 'nbp-color-default' },
    { name: 'Succcess', classe: 'nbp-color-success' },
    { name: 'Primary', classe: 'nbp-color-primary' },
    { name: 'Info', classe: 'nbp-color-info' },
    { name: 'Danger', classe: 'nbp-color-danger' },
    { name: 'Warning', classe: 'nbp-color-warning' },
    { name: 'Tomato', classe: 'nbp-color-tomato' },
    { name: 'White', classe: 'nbp-color-white' },
  ];

  paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

  constructor() { }

  ngOnInit(): void {
  }

}
