import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { IProduct } from '../products/product.model';
import { ProductService } from '../products/product.service';
import { ProductFormGroup } from './forms.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  errorMessage:string

  constructor(private productServices : ProductService) { }

  product:IProduct;
  formGroup :ProductFormGroup = new ProductFormGroup()
  newProduct=new Product()
  dataSaved:boolean = false

    get jsonProduct(){
        return JSON.stringify(this.newProduct)
        
    }

    addProduct(p:Product){
        console.log("New Product ",p)
        this.productServices.addProduct(p).subscribe({
          next:products =>{
              console.log("Added new Product ZZZZ",products)
          },error:err => this.errorMessage=err
      })
    }

    // getValidationMessages(state:any ,thingName?:string){
    //     let thing:string =state.path ||thingName
    //     let message :string[] =[];
    //     if(state.errors){
    //         for(let errorname in state.errors){
    //             switch(errorname){
    //                 case "required" :
    //                     message.push(`You must enter a ${thing}`)
    //                     break
    //                 case "minlength" :
    //                     message.push(`A ${thing} should have atleast ${state.errors['minlength'].requiredLength} characters.`)
    //                     break
    //                 case "pattern":
    //                     message.push(`A ${thing} contains illegal character `)  
    //                     break      
    //             }
    //         }
    //     }
    //     return message
    // }


    // getFormValidationSummary(form : NgForm):string[]{
    //     let messages:string[]= []
    //     Object.keys(form.controls).forEach(k => {
    //         this.getValidationMessages(form.controls[k],k)
    //         .forEach(m => messages.push(m))

    //     })
    //     return messages
    // }
    // formSubmitted : boolean = false
    // valid:boolean =false

    // submitForm(form:NgForm){
    //     this.formSubmitted = true 
    //     if(form.valid){
    //         this.valid = true
    //         this.addProduct(this.newProduct)
    //         this.newProduct = new Prod()
    //         form.reset()
    //         this.formSubmitted = false
    //     }

    // }
       

    formSubmitted : boolean = false
    valid:boolean =false

    submitForm(){
        Object.keys(this.formGroup.controls).forEach(c => this.newProduct[c]=this.formGroup.controls[c].value)
        this.formSubmitted =true
        if(this.formGroup.valid){
            //let pro ={...{'id':56},...this.newProduct}
            //console.log("PROOOOOOO",pro)
            this.addProduct(this.newProduct)
            this.newProduct = new Product()
            this.formSubmitted = false
            this.dataSaved = true
            this.formGroup.reset()

        }
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


  ngOnInit(): void {
  }

}
