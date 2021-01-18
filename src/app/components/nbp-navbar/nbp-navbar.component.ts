import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-navbar',
  templateUrl: './nbp-navbar.component.html',
  styleUrls: ['./nbp-navbar.component.scss']
})
export class NbpNavbarComponent extends NbpBaseComponent implements OnInit {

  items = [
    {
      title: "Buttons",
      link: "/composants/buttons"
    },
    {
      title: "Feedback Messages",
      link: "/composants/feedbacks"
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

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  // Functions

}
