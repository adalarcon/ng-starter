import { Component, OnInit } from '@angular/core';
import { DataService }        from '../../services/data.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {

  order: any;
  orders: Array<any>;
  orderDetail: Array<any>;
  employee: any;
  customer: any;
  action: any;
  isLoading: boolean;
  open: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.onFind();
  }

  onFind(){
    console.log("onFind");
    this.isLoading= true;
    this.dataService.find("orders").subscribe(res => {
      this.orders = res;
      this.isLoading= false;
   }, error => {
     this.isLoading= false;
     console.log(error);
   });
  }

  onFindOrderDetail(id){
    console.log("findBy");
    this.isLoading= true;
    this.dataService.findBy("orders", id + "/detail").subscribe(res => {
      this.orderDetail = res;
      this.isLoading= false;
   }, error => {
     this.isLoading= false;
     console.log(error);
   });
  }

  onFindEmployee(id){
    console.log("findBy");
    this.isLoading= true;
    this.dataService.findById("employees", id).subscribe(res => {
      this.employee = res;
      this.isLoading= false;
   }, error => {
     this.isLoading= false;
     console.log(error);
   });
  }

  onFindCustomer(id){
    console.log("findBy");
    this.isLoading= true;
    this.dataService.findById("customers", id).subscribe(res => {
      this.customer = res;
      this.isLoading= false;
   }, error => {
     this.isLoading= false;
     console.log(error);
   });
  }

  onSelect(order){
    this.customer = {};
    this.employee = {};
    this.orderDetail = [];

    this.onFindOrderDetail(order._id);
    this.onFindEmployee(order.EmployeeID);
    this.onFindCustomer(order.CustomerID);
    this.open = true;

  }


}
