import { Component, OnInit } from '@angular/core';
import { Cart } from '../product-cart.model';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-product-invoice',
  templateUrl: './product-invoice.component.html',
  styleUrls: ['./product-invoice.component.css']
})
export class ProductInvoiceComponent implements OnInit {
  cartData:Cart[]
  total:number = 0
  shipping:number = 0

  constructor(private cartItems:ProductCartService) { }

  ngOnInit(): void {

    this.cartData=this.cartItems.getCartItems()
   this.cartData.map((obj)=>{
    this.total += obj.product.price * obj.quantity
    this.shipping = 50
  })
  }

}
