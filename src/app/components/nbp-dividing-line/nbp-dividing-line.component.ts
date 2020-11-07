import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nbp-dividing-line',
  templateUrl: './nbp-dividing-line.component.html',
  styleUrls: ['./nbp-dividing-line.component.scss']
})
export class NbpDividingLineComponent implements OnInit {

  @Input() nbpTitle: string;
  @Input() nbpCta: boolean = false;
  @Input() nbpCtaText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
