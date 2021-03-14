import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-profile-box-page',
  templateUrl: './nbp-profile-box-page.component.html',
  styleUrls: ['./nbp-profile-box-page.component.scss']
})
export class NbpProfileBoxPageComponent extends NbpBaseComponent implements OnInit {

  title1 = 'Profile Box Title Page';

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  // Function
  nbpOnClickBtn(event) {
    console.log("NbpProfileBoxPageComponent: ", event)
  }
}
