import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductModel } from '../../../../model/product.model';
import { ProductService } from '../product.service';
import { Observable, filter, map, tap } from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  product: ProductModel = this.activatedRoute.snapshot.data['data']['product'];


}
