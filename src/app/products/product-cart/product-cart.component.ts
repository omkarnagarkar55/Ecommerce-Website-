import { Component, OnInit } from '@angular/core';
import { Cart } from './product-cart.model';
import { ProductCartService } from './product-cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  cartData:Cart[]
  total:number = 0
  shipping:number = 0

  constructor(private cartItems:ProductCartService) { 

  } 

  removeItem(id:number){
    console.log("Remove item id:",id)
    this.cartItems.removeCartItem(id)
    this.shipping = 0
    this.cartData=this.cartItems.getCartItems()

  }

  updateTotal(){
    this.cartData.map((obj)=>{
      this.total += obj.product.price *obj.quantity 
      this.shipping = 50
    })

  }
  changeQuantity(event:any ,id:number){
    console.log(`CHANGE event ${id}:${event.target.value} `)
    this.cartItems.changeQuantity(id,event.target.value)
  }
  ngOnInit(): void {


    this.cartData=this.cartItems.getCartItems()
    this.cartItems.cartItemChange.subscribe((status:Cart[])=>{
    this.cartData=status
    this.total = 0
    this.updateTotal()
    console.log("jimimimiiHEHEHEHE",this.cartData)})

    this.updateTotal()
    console.log("In Product Cart" ,this.cartData)
  }

}
