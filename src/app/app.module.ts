import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductData } from './products/product-data/product.data';
import { ProductService } from './products/product.service';
import { ProductsComponent } from './products/products.component';
import { StarComponent } from './shared/stars.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './shared/filter.pipe';
import { RouterModule } from '@angular/router';
import { ProductCartComponent } from './products/product-cart/product-cart.component';
import { ProductCartService } from './products/product-cart/product-cart.service';
import { ProductInvoiceComponent } from './products/product-cart/product-invoice/product-invoice.component';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { Error404Component } from './shared/error404/error404.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    StarComponent,
    ProductDetailsComponent,
    FilterPipe,
    ProductCartComponent,
    ProductInvoiceComponent,
    AboutComponent,
    AddProductComponent,
    Error404Component,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductData),
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [ProductCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
