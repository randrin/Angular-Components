import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from './components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends NbpBaseComponent implements OnInit {

  title = 'Angular Components';

  constructor(injector: Injector) { super(injector); }

  ngOnInit(): void {
    console.log("this.nbpToken: ", !!this.nbpToken)
  }
  
}