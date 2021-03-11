import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'app-nbp-patient',
  templateUrl: './nbp-patient.component.html',
  styleUrls: ['./nbp-patient.component.scss']
})
export class NbpPatientComponent extends NbpBaseComponent implements OnInit {

  nbpUpdateErrorMessage: string = "";
  nbpUpdatePatient:boolean= true;

  constructor(injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
