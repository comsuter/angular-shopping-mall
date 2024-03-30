import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './product/product.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';
import { CategoryModule } from './category/category.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // 앵귤러 모듈
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // CommonModule,

    // 앱 모듈
    MainModule,
    ProductModule,
    CategoryModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
