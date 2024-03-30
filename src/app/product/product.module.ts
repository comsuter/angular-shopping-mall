import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductManagementComponent,
  ],
  exports: [
    ProductManagementComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule, // 상품 도메인 라우팅 모듈 추가
  ]
})
export class ProductModule { }
