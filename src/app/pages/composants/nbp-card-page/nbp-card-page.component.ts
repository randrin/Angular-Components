import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-card-page',
  templateUrl: './nbp-card-page.component.html',
  styleUrls: ['./nbp-card-page.component.scss']
})
export class NbpCardPageComponent extends NbpBaseComponent implements OnInit {

  constructor(injector: Injector) { super(injector); }

  title1 = "Card 1 Page";
  
  ngOnInit(): void {
  }

}
