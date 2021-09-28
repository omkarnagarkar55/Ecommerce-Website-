import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { Cart } from './product-cart/product-cart.model';
import { ProductCartService } from './product-cart/product-cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title:string
  productList:Product[]=[]
  listFilter:string
  errorMessage:string
  //cartData:Cart[]

  constructor(private productService:ProductService ,private cartItems:ProductCartService) {
    this.title = productService.productTitle
   }

  ngOnInit(): void {
    // this.cartItems.cartItemChange.subscribe((status:Cart[])=>{
    //   this.cartData=status
    //   console.log("jimimimiiHEHEHEHE",this.cartData)})

    this.productService.getProducts().subscribe({
      next:products =>{
          this.productList =products
      },error:err => this.errorMessage=err
  })
  }
}
