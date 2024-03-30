import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ProductDetailComponent } from './product-management/product-detail/product-detail.component';
import { productGuard, productResolve } from './product-management/product.guard';

const routes: Routes = [
  { path: 'product-list', component: ProductManagementComponent },
  { path: 'product/:id', component: ProductDetailComponent, resolve: { data: productResolve } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }
