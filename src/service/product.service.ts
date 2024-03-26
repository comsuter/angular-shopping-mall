import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { ProductModel } from "../model/product.model";

@Injectable({providedIn: 'root'})
export class ProductService {

  http = inject(HttpClient);
  products$!: Observable<ProductModel[]>;

  getProducts() {
    this.products$ = this.http.get<ProductModel[]>('/assets/db.json');
  }
}
