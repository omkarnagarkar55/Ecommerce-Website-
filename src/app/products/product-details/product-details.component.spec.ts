import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should create the ProductDetailsComponent', () => {
    const fixture = TestBed.createComponent(ProductDetailsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Edit Mode should be False initially', () => {
    const fixture = TestBed.createComponent(ProductDetailsComponent);
    const app = fixture.componentInstance;
    expect(app.editMode).toBeFalsy();
  });

  it('Product quantity should be one by default', () => {
    const fixture = TestBed.createComponent(ProductDetailsComponent);
    const app = fixture.componentInstance;
    expect(app.quantity).toEqual(1);
  });

});
