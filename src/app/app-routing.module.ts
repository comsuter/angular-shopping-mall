import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { MainDashboardComponent } from './main/main-dashboard/main-dashboard.component';

const routes: Routes = [
  { path: 'total-summary', component: MainDashboardComponent },
  { path: '', redirectTo: 'total-summary', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
