import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from "@clr/angular";
import { ROUTING } from "./app.routes";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from '@angular/core';
import { HttpClientModule }       from '@angular/common/http';
import { FormsModule }            from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { EmployeeComponent } from './components/employees/employee/employee.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { OrderComponent } from './components/orders/order/order.component';
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { HomeComponent } from './components/home/home.component';

import { DataService } from   './services/data.service';

import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './layout/simple-layout/simple-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    EmployeesComponent,
    OrdersComponent,
    ProductsComponent,
    EmployeeComponent,
    EmployeeListComponent,
    OrderComponent,
    OrderDetailComponent,
    OrderListComponent,
    HomeComponent,
    FullLayoutComponent,
    SimpleLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ClarityModule,
    ROUTING
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
