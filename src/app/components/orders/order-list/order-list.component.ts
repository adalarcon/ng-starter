import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
})
export class OrderListComponent implements OnInit {

  @Input() orders: any;
  @Output() selectEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(id){
    this.selectEvent.emit(id);
  }

}
