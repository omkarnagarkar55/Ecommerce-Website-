import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Product } from "../product";
import { Cart } from "./product-cart.model";

@Injectable({
    providedIn: 'root',
  })

export class ProductCartService{
    
    cartItemsCount:number = 0
    cartProducts : Cart[]
    cartSelect = new EventEmitter<number>()
    cartItemChange = new EventEmitter<Cart[]>()
    
    constructor(){
        this.cartProducts = []
    }

    set CartItem(count:number ){
        console.log("Count Set Successful !!!")
        this.cartItemsCount = this.cartItemsCount + count
        this.cartSelect.emit(this.cartItemsCount)
        console.log("Quantity is" ,this.cartItemsCount)
        
    }

    setCartItems(count:number,product :Product){
        if(this.cartProducts.find((obj)=>obj.product.id === product.id)){
            console.log("Matchedddddddddd")
            this.cartProducts.map((obj)=>{
                if(obj.product.id=== product.id){
                    obj.quantity+=count
                }
            })
        }else{
            let prod = new Cart()
            prod.quantity=count
            prod.product=product
            this.cartProducts.push(prod)
        }

        //console.log("EUUUUUUUUUU",this.cartProducts.length)
        this.cartProducts.map((obj)=>console.log("Object is ::",obj))
        this.cartItemChange.emit(this.cartProducts.slice())
    }

    getCartItems(){
        return this.cartProducts.slice()
    }

    removeCartItem(id:number){
        console.log("Deleted in Service",id)
        var tempArray= [...this.cartProducts]
        var tempCount = this.cartItemsCount
        let i 
        for(i=0;i<this.cartProducts.length;i++){
            if(this.cartProducts[i].product.id === id){
                
                tempCount -= this.cartProducts[i].quantity 
                tempArray.splice(i,1)
                console.log("Delete Successfull!!!",tempArray)

            }
        }
        this.cartProducts = tempArray
        this.cartItemsCount = tempCount
        this.cartSelect.emit(this.cartItemsCount)
        this.cartItemChange.emit(this.cartProducts.slice())

    }
    changeQuantity(id:number , newCount:number){
        console.log(`Service quantity change  ${id}:${newCount}`)
        var tempArray= [...this.cartProducts]
        //var tempCount = this.cartItemsCount
        let i:number 
        for(i=0;i<this.cartProducts.length;i++){
            if(this.cartProducts[i].product.id === id){
                tempArray[i].quantity = newCount
                
                console.log("change Quantity Successfull!!!",tempArray)
            }
        }
        this.getCartItemsCount()
        this.cartProducts = tempArray
        //this.cartItemsCount = tempCount
        //this.cartSelect.emit(this.cartItemsCount)
        this.cartItemChange.emit(this.cartProducts.slice())


    }
    getCartItemsCount(){
        this.cartItemsCount = 0 
        this.cartProducts.map((obj)=>{
            this.cartItemsCount+= +obj.quantity
        })
        this.cartSelect.emit(this.cartItemsCount)
    }
}