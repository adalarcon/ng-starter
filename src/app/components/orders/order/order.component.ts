import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  @Input() order: any;

  constructor() { }

  ngOnInit() {
  }

}
