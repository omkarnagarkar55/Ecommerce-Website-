import { EventEmitter, Injectable } from "@angular/core";
import { IProduct } from "./product.model";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators'
import { Observable, throwError } from "rxjs";
import { Product } from "./product";



@Injectable({
    providedIn:'root'
})
export class ProductService{
    productTitle : string ="E-Com"
    private locator = (p:Product,id:number) => p.id === id;
    products : Product[] =[]
    id:number = 100
    private url ="api/products"
    editSwitch = new EventEmitter<boolean>()
    editMode:boolean = false
    
    constructor(private http:HttpClient){
        
    }

    seteditModeChange(edit:boolean){
        this.editMode = edit
        this.editSwitch.emit(this.editMode)
    }
    
    private handleerror(err :HttpErrorResponse){
        let errorMessage =""
        if(err.error instanceof ErrorEvent){

            errorMessage = `An error has occured ${err.error.message}`
        }else{
            errorMessage = `Server  returned code ${err.status} , error message is:${err.message}`
        }
        return throwError(errorMessage)
    }



        getProducts():Observable<Product[]>{
            return this.http.get<Product[]>(this.url).pipe(tap(data => this.products = data ),
        catchError(this.handleerror));
//returns observable
        }
        
        getProduct(id:number):Observable<Product>{
            const url = `${this.url}/${id}`;
            return this.http.get<Product>(url)
              .pipe(
                tap(data => console.log('getProduct: ' + JSON.stringify(data))),
                catchError(this.handleerror)
              );
        }
        
        getProductById(id:number):Product{
            return this.products.find(p=>this.locator(p,id))
        }
    
        deleteProduct(id:number):Observable<{}>{
            const headers = new HttpHeaders({'Content-Type':'application/json'})
            const url =`${this.url}/${id}`
            return this.http.delete<Product>(url)
              .pipe(
                tap(data => console.log('Deleted ' + id)),
                catchError(this.handleerror)
              ); 
        }

        addProduct(product:Product):Observable<Product>{
            const headers = new HttpHeaders({'Content-Type':'application/json'})
            product.id = this.id++; 
            return this.http.post<Product>(this.url,product,{headers})
            .pipe(tap(data => console.log('Post method data ',JSON.stringify(data))),
            catchError(this.handleerror)
            );

        }

        updateProduct(product:Product):Observable<Product>{
            const headers = new HttpHeaders({'Content-Type':'application/json'})
            
            const url =`${this.url}/${product.id}`
            return this.http.put<Product>(url,product,{headers})
            .pipe(
                tap(data => console.log('Update Method ', product.id)),
                map(()=>product), // updating product array
                catchError(this.handleerror)
            );

        }
 
}