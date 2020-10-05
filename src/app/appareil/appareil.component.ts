import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }
  // method that returns color according to status
  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }
}
