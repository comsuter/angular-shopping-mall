import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";
import { map, Observable } from 'rxjs';
import { ProductService } from '../service/product.service';
import { ProductModel } from '../model/product.model';

export const productGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const id = route.params['id'];

  return getProduct(id).pipe(

    map(product => {

      debugger;
      if(product) {
        return true;
      }
      router.navigate(['/main/products']);
      return false;
    })
  )
}

export const productResolve: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const id = route.params['id'];
  debugger;

  return getProduct(id).pipe(
    map(product => {
      return {product: product};
    })
  )
}

function getProduct(id: number): Observable<ProductModel | undefined> {
  debugger;
  const productService = inject(ProductService);
    return productService.products$.pipe(

    map(products => {
      return products.find(product => Number(product.id) === Number(id));
    })
  )
}
