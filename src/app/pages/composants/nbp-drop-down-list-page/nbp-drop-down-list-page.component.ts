import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-drop-down-list-page',
  templateUrl: './nbp-drop-down-list-page.component.html',
  styleUrls: ['./nbp-drop-down-list-page.component.scss']
})

export class NbpDropDownListPageComponent extends NbpBaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
}
