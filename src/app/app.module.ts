import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // 앵귤러 모듈
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // 앱 모듈
    MainModule,
    ProductModule,

    // 앱 라우팅 모듈
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
