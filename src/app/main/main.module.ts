import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const CORE_COMPONENTS = [ NavbarComponent, SidebarComponent, FooterComponent, MainDashboardComponent, PageNotFoundComponent ];

@NgModule({
  declarations: [
    CORE_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule // 라우터 모듈
  ],
  exports: [
    CORE_COMPONENTS
  ]
})
export class MainModule { }
