import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';

@NgModule({
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      AppRoutingModule
   ],
   providers: [],
   declarations: [
      AppComponent,
      TopBarComponent,
      ProductListComponent,
      ProductAlertComponent,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
