import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  // ajouter des routes pour orders
  // on a besoin de trois routes
  // PageListOrdersComponent
  // localhost:4200/orders/
  { path: '', component: PageListOrdersComponent },

  // PageAddOrderComponent
  // localhost:4200/orders/add
  { path: 'add', component: PageAddOrderComponent },

  // PageEditOrderComponent
  // localhost:4200/orders/edit
  { path: 'edit', component: PageEditOrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
