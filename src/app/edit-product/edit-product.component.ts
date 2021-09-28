import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../products/product';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id:number
  productx:Product = new Product()
  newProduct:Product
  errorMessage:string
  constructor(private route:ActivatedRoute,private router:Router ,private productService:ProductService) { }

  ngOnInit(): void {

    this.id = +this.router.url.split('/')[2]
    console.log("Eddddddditii",this.id)
    this.getProductById(this.id)
     

      }

      getProductById(id:number){
        this.productService.getProduct(id).subscribe({
          next:product=>{
            this.newProduct = product
            this.productx = this.newProduct
            console.log("edit Hipppppppp",this.newProduct)
          },error:err => this.errorMessage=err 
        })
      }    


  
  dataSaved:boolean = false

    get jsonProduct(){
        return JSON.stringify(this.newProduct)
        
    }

    updateProduct(p:Product){
        console.log("Updated Product ",p)
        this.productService.updateProduct(p).subscribe({
          next:products =>{
              console.log("Updated new Product UUUUU",products)
          },error:err => this.errorMessage=err
      })
    }

    getValidationMessages(state:any ,thingName?:string){
        let thing:string =state.path ||thingName
        let message :string[] =[];
        if(state.errors){
            for(let errorname in state.errors){
                switch(errorname){
                    case "required" :
                        message.push(`You must enter a ${thing}`)
                        break
                    case "minlength" :
                        message.push(`A ${thing} should have atleast ${state.errors['minlength'].requiredLength} characters.`)
                        break
                    case "pattern":
                        message.push(`A ${thing} contains illegal character `)  
                        break      
                }
            }
        }
        return message
    }


    getFormValidationSummary(form : NgForm):string[]{
        let messages:string[]= []
        Object.keys(form.controls).forEach(k => {
            this.getValidationMessages(form.controls[k],k)
            .forEach(m => messages.push(m))

        })
        return messages
    }
    formSubmitted : boolean = false
    valid:boolean =false

    submitForm(form:NgForm){
        this.formSubmitted = true 
        if(form.valid){
            this.valid = true
            this.dataSaved =true
            console.log("WEEEEEEEE",JSON.stringify( this.productx))
            this.updateProduct(this.productx)
            this.productx = new Product()
            form.reset()
            this.formSubmitted = false
            this.router.navigate(['/products'])
        }

    }
    onBack(){
      this.productService.seteditModeChange(false)
      this.router.navigate(['/products',this.productx.id])
    }

    canExit() : boolean {
      if(!this.dataSaved){
        if (confirm("Your form is not saved.All your data in form will be lost ,Do you wish to Please confirm?")) {
            return true
          } else {
            return false
          }
      }
        return true
      }
       






}
