import { Component, Injector, Input, OnInit } from "@angular/core";
import { NbpBaseComponent } from "../../nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-panel-title-one",
  templateUrl: "./nbp-panel-title-one.component.html",
  styleUrls: ["./nbp-panel-title-one.component.scss"],
})
export class NbpPanelTitleOneComponent
  extends NbpBaseComponent
  implements OnInit {
  @Input() nbpPanelTitle: string;
  @Input() nbpPanelTitleStyle: string;
  @Input() nbpPanelTitlePosition: string;

  nbpTitle: string;
  nbpBorderPanel: string;
  nbpBackgroundTitle: string;
  nbpPositionTitle: string;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpGetClasses();
  }

  nbpGetClasses() {
    this.nbpPositionTitle = this.nbpGetPanelTitlePosiionClasse(
      this.nbpPanelTitlePosition
    );
    this.nbpBackgroundTitle = this.nbpGetBackgroundClasse(
      this.nbpPanelTitleStyle
    );
    this.nbpBorderPanel = this.nbpGetBorderClasse(this.nbpPanelTitleStyle, this._type.BORDER);
    this.nbpTitle =
      this.nbpBackgroundTitle + this.nbpSeparator + this.nbpPositionTitle;
  }
}
