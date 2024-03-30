import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { ProductModel } from '../../../model/product.model';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.css'
})
export class ProductManagementComponent {

  productService = inject(ProductService);
  productList$ : any
  router = inject(Router);

  ngOnInit(): void {
    this.productService.getProducts();
    this.productList$ = this.productService.products$; // 목록 조회
  }

  selectDetail(product: ProductModel) {
    debugger;
    this.router.navigate([`/product/${product.id}`]);
  }
}
