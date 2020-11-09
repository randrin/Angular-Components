import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nbp-button',
  templateUrl: './nbp-button.component.html',
  styleUrls: ['./nbp-button.component.scss']
})
export class NbpButtonComponent implements OnInit {

  @Input() nbpLabel: string;
  @Input() nbpColorStyle: string;
  @Input() nbpStyleType: string;
  @Input() nbpSize: string;

  nbpButton: string;
  nbpSeparator: string = ' ';

  constructor() { }

  ngOnInit(): void {
    this.nbpGetClasses();
  }

  nbpGetClasses() {
    this.nbpButton = this.nbpGetColorClass() + this.nbpSeparator + this.nbpGetStyleClass() + this.nbpSeparator + this.nbpGetSizeClass();
  }

  nbpGetColorClass() {
    if (this.nbpColorStyle === 'DEFAULT' || this.nbpColorStyle === '' || this.nbpColorStyle === undefined) {
      return 'npb-button-default';
    }
    if (this.nbpColorStyle === 'PRIMARY') {
      return 'npb-button-primary';
    }
    if (this.nbpColorStyle === 'DANGER') {
      return 'npb-button-danger';
    }
  }

  nbpGetStyleClass() {
    if (this.nbpStyleType === 'ROUNDED') {
      return 'npb-button-rounded';
    }
    if (this.nbpStyleType === 'OUTLINE') {
      if (this.nbpColorStyle === 'DEFAULT' || this.nbpColorStyle === '' || this.nbpColorStyle === undefined) {
        return 'npb-button-outline-default';
      }
      if (this.nbpColorStyle === 'PRIMARY') {
        return 'npb-button-outline-primary';
      }
      if (this.nbpColorStyle === 'DANGER') {
        return 'npb-button-outline-danger';
      }
    }
  }

  nbpGetSizeClass() {
    if (this.nbpSize === 'SM' || this.nbpSize === '' || this.nbpSize === undefined) {
      return 'npb-button-small';
    }
    if (this.nbpSize === 'MD') {
      return 'npb-button-medium';
    }
    if (this.nbpSize === 'LG') {
      return 'npb-button-large';
    }
  }

}
