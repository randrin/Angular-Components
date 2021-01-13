import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-box-page',
  templateUrl: './nbp-box-page.component.html',
  styleUrls: ['./nbp-box-page.component.scss']
})
export class NbpBoxPageComponent extends NbpBaseComponent implements OnInit {

  constructor(injector: Injector) { super(injector); }

  title1 = "Box 1 Page";
  
  ngOnInit(): void {
  }

}
