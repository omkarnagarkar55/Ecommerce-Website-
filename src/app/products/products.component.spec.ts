import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { ProductsComponent } from './products.component';
import { FilterPipe } from '../shared/filter.pipe';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent,FilterPipe ],
      providers:[ProductService],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should create the Product Component', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Product List should be empty initially', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const app = fixture.componentInstance;
    expect(app.productList).toEqual([]);
  });

  it('Title of the page should be E-Com', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("E-Com");
  });
});
