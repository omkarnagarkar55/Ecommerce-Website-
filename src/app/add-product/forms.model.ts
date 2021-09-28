import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LimitValidator } from "./limit.formvalidator";


export class ProductReactiveFormComponent extends FormControl{
    label :string ;
    modelProperty : string

    constructor(label:string ,property:string,value:any,validator:any){
        super(value,validator);
        this.label=label
        this.modelProperty =property

    }

    getValidationMessages(){
        let messages:string[]=[];
        if(this.errors){
            for(let errorname in this.errors){
                switch(errorname){
                    case "required" :
                        messages.push(`You must enter a ${this.label}`)
                        break
                    case "minlength" :
                        messages.push(`A ${this.label} should have atleast ${this.errors['minlength'].requiredLength} characters.`)
                        break
                    case "limit" :
                        messages.push(`A ${this.label} cannot be more than  ${this.errors['limit'].limit}`)
                        break
                    case "maxlength" :
                        messages.push(`A ${this.label} can be  ${this.errors['maxlength'].requiredLength} characters.`)
                        break
                    case "pattern":
                        messages.push(`A ${this.label} contains illegal character `)  
                        break      
                }
            }
        }
        return messages
    }


}

export class ProductFormGroup extends FormGroup{
    constructor(){
        super({
            name:new ProductReactiveFormComponent("Name","name",'',Validators.required),
            category: new ProductReactiveFormComponent("Category","category",'',
            Validators.compose([Validators.required,
            Validators.pattern("^[A-Za-z ]+$"),
            Validators.minLength(3),
            Validators.maxLength(15)])),
            price: new ProductReactiveFormComponent("Price","price",'',
            Validators.compose([Validators.required,
            LimitValidator.Limit(5000),
            Validators.pattern("^[0-9\.]+$")])),
            description : new ProductReactiveFormComponent("Description","description",'',
            Validators.compose([Validators.required])),
            image : new ProductReactiveFormComponent("Image","image",'',
            Validators.compose([Validators.required])),
            rating : new ProductReactiveFormComponent("Rating","rating",'',
            Validators.compose([Validators.required,
                Validators.pattern("^[0-5]")]))
        });
    }

    get productControls():ProductReactiveFormComponent[]{
        return Object.keys(this.controls).map(k => this.controls[k] as ProductReactiveFormComponent)
    }

    getValidationMessages(name:string):string[]{
        return(this.controls[name] as ProductReactiveFormComponent).getValidationMessages()
    }

    getFormValidationSummary():string[]{
        let messages:string[]=[]
        Object.values(this.controls).forEach(c =>
            messages.push(...(c as ProductReactiveFormComponent).getValidationMessages()))
        
        return messages
    }
    
}