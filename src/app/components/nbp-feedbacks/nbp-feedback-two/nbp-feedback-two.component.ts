import { Component, EventEmitter, Injector, Input, OnInit, Output } from "@angular/core";
import { NbpBaseComponent } from "../../nbp-base-component/nbp-base.component";

@Component({
  selector: 'nbp-feedback-two',
  templateUrl: './nbp-feedback-two.component.html',
  styleUrls: ['./nbp-feedback-two.component.scss']
})
export class NbpFeedbackTwoComponent extends NbpBaseComponent implements OnInit {
  @Input() nbpTitle: string;
  @Input() nbpMessage: string;
  @Input() nbpFeedbackType: string;
  
  @Output() clickBackUpdateDelete: EventEmitter<any> = new EventEmitter<any>();


  nbpFeedback: string;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
    
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpFeedback = this.nbpGetColorFeedbackClasse(this.nbpFeedbackType);
  }

   onClickBackUpdateDelete(event){
     this.clickBackUpdateDelete.emit(event)
   }
}
