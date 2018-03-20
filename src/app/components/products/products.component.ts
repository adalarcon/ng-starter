import { Component, OnInit } from '@angular/core';
import { DataService }        from '../../services/data.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {

  product: any;
  products: Array<any>;
  action: any;
  isLoading: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.onFind();
  }

  onFind(){
    console.log("onFind");

    this.isLoading= true;
    this.dataService.find("products").subscribe(res => {
      this.products = res;
      console.log(this.products);
      this.isLoading= false;
   }, error => {
     this.isLoading= false;
     console.log(error);
   });
  }

}
