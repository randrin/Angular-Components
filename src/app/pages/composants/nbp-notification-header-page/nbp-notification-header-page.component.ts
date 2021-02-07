import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-notification-header-page',
  templateUrl: './nbp-notification-header-page.component.html',
  styleUrls: ['./nbp-notification-header-page.component.scss']
})

export class NbpNotificationHeaderPageComponent extends NbpBaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
}
