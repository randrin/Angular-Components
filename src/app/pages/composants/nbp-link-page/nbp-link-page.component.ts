import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';
import { Model } from 'src/app/models/model';
import { NbpStyle, NbpSize, NbpPipe } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-link-page',
  templateUrl: './nbp-link-page.component.html',
  styleUrls: ['./nbp-link-page.component.scss']
})
export class NbpLinkPageComponent extends NbpBaseComponent implements OnInit {

  title1 = 'Deep Links Page';
  title2 = 'Arrow Links Page';
  
  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
