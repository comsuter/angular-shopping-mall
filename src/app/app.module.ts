import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // 앵귤러 모듈
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // 앱 모듈
    MainModule,
    ProductModule,
    CategoryModule,
    AppRoutingModule,

    /* 3rd Modules */
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    // AngularFireDatabaseModule,
    SharedModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
