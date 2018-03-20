import { Component, OnInit } from '@angular/core';
import { DataService }        from '../../services/data.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
})
export class EmployeesComponent implements OnInit {

  employee: any;
  employees: Array<any>;
  action: any;
  isLoading: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.onFind();
  }

  onFind(){
    console.log("onFind");

    this.isLoading= true;
    this.dataService.find("employees").subscribe(res => {
      this.employees = res;
      console.log(this.employees);
      this.isLoading= false;
   }, error => {
     this.isLoading= false;
     console.log(error);
   });
  }


}
