import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { MainDashboardComponent } from './main/main-dashboard/main-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'main-dashboard', pathMatch: 'full' },
  { path: 'main-dashboard', component: MainDashboardComponent },
  { path: '**', component: PageNotFoundComponent }

  // { path: 'product-list', component: ProductManagementComponent }, // category-routing.module.ts
  // { path: 'category-list', component: CategoryManagementComponent }, // product-routing.module.ts
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
