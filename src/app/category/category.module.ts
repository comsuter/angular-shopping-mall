import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  declarations: [
    CategoryManagementComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule // 카테고리 도메인 라우팅 모듈 추가
  ]
})
export class CategoryModule { }
