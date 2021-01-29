import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';
import * as uuid from 'uuid';

@Component({
  selector: 'nbp-modal-two',
  templateUrl: './nbp-modal-two.component.html',
  styleUrls: ['./nbp-modal-two.component.scss']
})
export class NbpModalTwoComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpModalTitle: string;
  @Input() nbpModalContent: string; 
  @Input() nbpModalSize: string;
  @Input() nbpModalPosition: string;
  @Input() nbpModalMode: string;

  @Output() nbpOnSave: EventEmitter<any> = new EventEmitter<any>();
  @Output() nbpOnClose: EventEmitter<any> = new EventEmitter<any>();

  modalSize: string;
  modalPosition: string
  nbpSizeAndPosition: string;
  nbpModalName: string;
  nbpModalStatic : string

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void { 
    this.nbpSetUpComponent();
  }
  
  nbpSetUpComponent() {
    this.nbpModalName = 'a'+ uuid.v4(); 
    this.modalSize = this.nbpGetSizeModalClasse(this.nbpModalSize);
    this.modalPosition = this.nbpGetnbpModalPosition(this.nbpModalPosition);
    this.nbpSizeAndPosition =  this.modalPosition + this.nbpSeparator + this.modalSize ;
     this.nbpModalStatic = this.nbpGetTypeModal(this.nbpModalMode)
    console.log('this.nbpModalName two: ', this.nbpModalName)
  }

  nbpOnSaved(){

  }

  nbpOnClosed(){

  }
}

