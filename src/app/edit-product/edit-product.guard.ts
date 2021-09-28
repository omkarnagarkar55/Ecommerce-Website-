import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { EditProductComponent } from './edit-product.component';

 
@Injectable({
    providedIn:'root'
})
export class EditProductGuard implements CanDeactivate<EditProductComponent>
{
    component: Object;
    route: ActivatedRouteSnapshot;
 
   constructor(){
   }
 
   canDeactivate(component:EditProductComponent,
                route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot,
                nextState: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
        
        return component.canExit();
 
  }
  
}