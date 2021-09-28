import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { EditProductComponent } from './edit-product.component';
import { FormsModule } from '@angular/forms';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should create the EditProductComponent', () => {
    const fixture = TestBed.createComponent(EditProductComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Form Submission should be invalid when empty', () => {
    const fixture = TestBed.createComponent(EditProductComponent);
    const app = fixture.componentInstance;
    expect(component.formSubmitted).toBeFalsy();
  });

  it('Form should be invalid when empty', () => {
    const fixture = TestBed.createComponent(EditProductComponent);
    const app = fixture.componentInstance;
    expect(component.valid).toBeFalsy();
  });

  it('id should not be set', () => {
    const fixture = TestBed.createComponent(EditProductComponent);
    const app = fixture.componentInstance;
    expect(component.id).toEqual(NaN);
  });
});
