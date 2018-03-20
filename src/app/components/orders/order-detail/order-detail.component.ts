import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
})
export class OrderDetailComponent implements OnInit {

  @Input() orderDetail: Array<any>;
  @Input() employee: any;
  @Input() customer: any;

  constructor() { }

  ngOnInit() {
  }

}
