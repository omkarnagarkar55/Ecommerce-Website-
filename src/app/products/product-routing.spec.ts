import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';


import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { routes } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products.component';
import { By } from '@angular/platform-browser';
import { FilterPipe } from '../shared/filter.pipe';
import { ProductService } from './product.service';

describe('ProductDetailsComponent', () => {
  let location:Location
  let fixture
  let router:Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    
      declarations: [AppComponent,ProductDetailsComponent,FilterPipe],
      providers:[ProductService],
      imports:[RouterTestingModule.withRoutes(routes),HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
    fixture = TestBed.createComponent(ProductsComponent)
    router.navigateByUrl("/")
    tick()
    fixture.detectChanges()
  });

  xit("can navigate ",fakeAsync(()=>{
    const productLink =fixture.debugElement.query(By.css('.card'))
    productLink.triggerEventHandler('click',{button:0})
    tick()
    fixture.detectChanges()
    expect(location.path()).toEqual('/products')
  }))

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });



});
