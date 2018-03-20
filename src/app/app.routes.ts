import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent }     from './components/customers/customers.component';
import { EmployeesComponent }     from './components/employees/employees.component';
import { OrdersComponent }        from './components/orders/orders.component';
import { ProductsComponent }      from './components/products/products.component';
import { HomeComponent }          from './components/home/home.component';

import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './layout/simple-layout/simple-layout.component';


export const ROUTES: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: SimpleLayoutComponent, children:[

  ]},
  { path: '', component: FullLayoutComponent, children:[
    { path: 'home', component: HomeComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'products', component: ProductsComponent },
  ]},

];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
