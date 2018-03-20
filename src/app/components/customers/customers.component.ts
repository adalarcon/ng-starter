import { Component, OnInit } from '@angular/core';
import { DataService }        from '../../services/data.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {

  customer: any;
  customers: Array<any>;
  action: any;
  isLoading: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.onFind();
  }

  onFind(){
    console.log("onFind");

    this.isLoading= true;
    this.dataService.find("customers").subscribe(res => {
      this.customers = res;
      console.log(this.customers);
      this.isLoading= false;
   }, error => {
     this.isLoading= false;
     console.log(error);
   });
  }

}
