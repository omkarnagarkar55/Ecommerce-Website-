import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductGuard } from './add-product/add-product.guard';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditProductGuard } from './edit-product/edit-product.guard';
import { ProductCartComponent } from './products/product-cart/product-cart.component';
import { ProductInvoiceComponent } from './products/product-cart/product-invoice/product-invoice.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductDetailGuard } from './products/product-details/product-details.guard';
import { ProductsComponent } from './products/products.component';
import { Error404Component } from './shared/error404/error404.component';

export const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'products/:id',canActivate:[ProductDetailGuard],component:ProductDetailsComponent ,children:[
    {path:'edit',canDeactivate:[EditProductGuard],component:EditProductComponent },
  ]},
  {path:'cart',component:ProductCartComponent },
  {path:'invoice',component:ProductInvoiceComponent },
  {path:'about',component:AboutComponent },
  {path:'addproduct',canDeactivate:[AddProductGuard],component:AddProductComponent },
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'**',component:Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
