import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../products/product-cart/product-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  quantity:number = 0
  constructor(private productCart:ProductCartService) {
    
   }

  ngOnInit(): void {
    this.productCart.cartSelect.subscribe((status:number)=>{
    console.log("New State====",status)
    this.quantity = +status
  })
  }

}
