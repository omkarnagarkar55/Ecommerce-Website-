import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartComponent } from './product-cart.component';

describe('ProductCartComponent', () => {
  let component: ProductCartComponent;
  let fixture: ComponentFixture<ProductCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Shipping variable should be zero', () => {
    const fixture = TestBed.createComponent(ProductCartComponent);
    const app = fixture.componentInstance;
    expect(app.shipping).toEqual(0);
  });

  it('Total variable should be zero', () => {
    const fixture = TestBed.createComponent(ProductCartComponent);
    const app = fixture.componentInstance;
    expect(app.total).toEqual(0);
  });


});
