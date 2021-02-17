import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';
import { NbpAuthService } from 'src/app/services/nbp-auth.service';

@Component({
  selector: 'nbp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends NbpBaseComponent implements OnInit {

  constructor(injector: Injector, private nbpAuthService: NbpAuthService) { super(injector) }

  ngOnInit(): void {
  }

}
