import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';


@Component({
  selector: 'nbp-tooltip',
  templateUrl: './nbp-tooltip.component.html',
  styleUrls: ['./nbp-tooltip.component.scss']
})
export class NbpTooltipComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpTooltipPosition: string;
  @Input() nbpTooltipShowDelay: number = 0;
  @Input() nbpTooltipHideDelay: number = 0;
  @Input() nbpContentTooltip: string;
  @Input() nbpTooltipButtonOrIconsName: string;
  @Input() nbpTooltipClickOrHover: string = "hover";
  @Input() nbpTooltipMaxWidth: number;
  @Input() nbpTooltipTheme: string = "dark";
  @Input() nbpTooltipIconName: string;
  @Input() nbpTooltipIconSize: string;


  nbpTooltipButton: boolean = true;
  nbpTooltipIcon: boolean = true
  nbpTooltipNameAndSize: string;
  nbpTooltipIconNames: string;
  nbpSizeTooltip: string;




  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {   
    this.nbpSetUpTooltipType();
    this.nbpSizeTooltip = this.nbpGetFontSizeClasse(this.nbpTooltipIconSize);
  }

  nbpSetUpTooltipType(){
    if(this.nbpTooltipIconName){
      this.nbpTooltipButton = false;
      this.nbpTooltipIcon = true
    }else
    if(this.nbpTooltipButtonOrIconsName ){
      this.nbpTooltipButton = true;
      this.nbpTooltipIcon = false
    }else
    if(this.nbpTooltipIconName && this.nbpTooltipButtonOrIconsName ){
      this.nbpTooltipButton = false;
      this.nbpTooltipIcon = true
    }
  }
}