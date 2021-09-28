import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AddProductComponent } from './add-product.component';

 
@Injectable({
    providedIn:'root'
})
export class AddProductGuard implements CanDeactivate<AddProductComponent>
{
    component: Object;
    route: ActivatedRouteSnapshot;
 
   constructor(){
   }
 
   canDeactivate(component:AddProductComponent,
                route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot,
                nextState: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
        
        return component.canExit();
 
  }
  
}