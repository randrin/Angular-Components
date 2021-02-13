import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-tab-bar-page',
  templateUrl: './nbp-tab-bar-page.component.html',
  styleUrls: ['./nbp-tab-bar-page.component.scss']
})

export class NbpTabbarPageComponent extends NbpBaseComponent implements OnInit {
  nbpTabbarOneConIcon = true;
  constructor(injector:Injector) {
    super(injector);
  }


  ngOnInit(): void { 
  }
  
}
