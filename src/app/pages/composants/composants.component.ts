import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'app-composants',
  templateUrl: './composants.component.html',
  styleUrls: ['./composants.component.scss']
})
export class ComposantsComponent extends NbpBaseComponent implements OnInit {

  title = 'Nbp Composants';

  model: string;
  hideNavigationMenu: boolean;

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.hideNavigationMenu = !this.hideNavigationMenu;
  }


  // Functions
  nbpInputModel(event) {
    this.model = event;
  }

}
