import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInvoiceComponent } from './product-invoice.component';

describe('ProductInvoiceComponent', () => {
  let component: ProductInvoiceComponent;
  let fixture: ComponentFixture<ProductInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Total variable should be zero', () => {
    const fixture = TestBed.createComponent(ProductInvoiceComponent);
    const app = fixture.componentInstance;
    expect(app.total).toEqual(0);
  });
  it('Cart should be empty', () => {
    const fixture = TestBed.createComponent(ProductInvoiceComponent);
    const app = fixture.componentInstance;
    expect(app.cartData).toEqual(undefined);
  });

  it('Shipping Charges  should be set to zero initially', () => {
    const fixture = TestBed.createComponent(ProductInvoiceComponent);
    const app = fixture.componentInstance;
    expect(app.shipping).toEqual(0);
  });
});
