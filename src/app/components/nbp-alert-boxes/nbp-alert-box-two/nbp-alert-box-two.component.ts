import { Component, Injector, Input, OnInit } from "@angular/core";
import { NbpBaseComponent } from "../../nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-alert-box-two",
  templateUrl: "./nbp-alert-box-two.component.html",
  styleUrls: ["./nbp-alert-box-two.component.scss"],
})
export class NbpAlertBoxTwoComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpText: string;
  @Input() nbpAlertType: string;

  constructor(injector: Injector) { super(injector); }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpAlertBoxIcon = this.nbpGetIconClasse(this.nbpAlertType);
    this.nbpAlertBoxType = this.nbpGetBorderClasse(this.nbpAlertType, "border");
    this.nbpAlertBoxColor = this.nbpGetColorClasse(this.nbpAlertType);
  }
}
