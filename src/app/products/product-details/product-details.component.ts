import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Product } from "../product";
import { ProductCartComponent } from "../product-cart/product-cart.component";
import { ProductCartService } from "../product-cart/product-cart.service";
import { ProductService } from "../product.service";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls:['./product-details.component.css']

  })
  
export class ProductDetailsComponent implements OnInit{

  constructor(private route:ActivatedRoute,private router:Router,private productService:ProductService,
    private productCart:ProductCartService){
    }
  pageTitle : string = "Product Page Details"
  productx:Product = new Product()
  errorMessage:string
  quantity:number = 1
  id:number
  editMode:boolean =false

  ngOnInit(){

    // let id =+this.route.snapshot.paramMap.get('id')
    // this.pageTitle += `: ${id}`
    // this.getProductById(id)
    // console.log("Hurryyyy",this.productx)
    this.route.params.subscribe(
      (params:Params) =>{
        this.id = +params['id']
        this.getProductById(this.id)
      }
    )
    this.productService.editSwitch.subscribe((state:boolean)=>{
      this.editMode = state 
    }) 
  }
  onBack(){
    // this.productService.seteditModeChange(false)
    // this.editMode = false
    this.router.navigate(['/products']);
  }

  getProductById(id:number){
    this.productService.getProduct(id).subscribe({
      next:product=>{
        this.productx = product
        console.log("Hipppppppp",this.productx)
      },error:err => this.errorMessage=err 
    })
  }
  onSubmit(){
  
    //console.log("Clickedaasdsa")
    this.productCart.CartItem = this.quantity
    this.productCart.setCartItems(this.quantity,this.productx)
  }
  onEdit(){
    //this.editMode= true
    this.productService.seteditModeChange(true)

  }

  onDelete(id:number){
    console.log("Delete product in Prod-details ",id)
    this.productService.deleteProduct(id).subscribe((data)=>{
      console.log("DDDDDDDDDDDDDDDDDDDDDDDD",data)
      this.router.navigate(['/products'])
    })

  }

 
}