import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { HttpClientModule } from '@angular/Common/http';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrderComponent,
    PageEditOrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    OrdersRoutingModule,
  ]
})
export class OrdersModule { }

// modules metier
// -- routing
