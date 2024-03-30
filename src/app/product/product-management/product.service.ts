import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, first, map, tap } from "rxjs";
import { ProductModel } from "../../../model/product.model";

@Injectable({providedIn: 'root'})
export class ProductService {

  http = inject(HttpClient);
  products$!: Observable<ProductModel[]>;

  // 상품 목록 조회
  getProducts() {
    this.products$ = this.http.get<ProductModel[]>('/assets/db.json');
  }

  getProduct(id: number): Observable<ProductModel | undefined> {
    return this.products$.pipe(
      first(),
      map(products => {
        return products.find(product => Number(product.id) === Number(id));
      })
    );
  }
}
