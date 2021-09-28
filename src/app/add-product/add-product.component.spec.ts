import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { AddProductComponent } from './add-product.component';
import { FormsModule } from '@angular/forms';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should create the EditProductComponent', () => {
    const fixture = TestBed.createComponent(AddProductComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Form Submission should be invalid when empty', () => {
    const fixture = TestBed.createComponent(AddProductComponent);
    const app = fixture.componentInstance;
    expect(app.formSubmitted).toBeFalsy();
  });

  it('Form should be invalid when empty', () => {
    const fixture = TestBed.createComponent(AddProductComponent);
    const app = fixture.componentInstance;
    expect(app.valid).toBeFalsy();
  });

  it('Data Save should be false when empty', () => {
    const fixture = TestBed.createComponent(AddProductComponent);
    const app = fixture.componentInstance;
    expect(app.dataSaved).toBeFalsy();
  });

  it('Form Group should be invalid when empty', () => {
    const fixture = TestBed.createComponent(AddProductComponent);
    const app = fixture.componentInstance;
    expect(app.formGroup.valid).toBeFalsy();
  });

  it('Form Submitted with valid data', () => {
    const fixture = TestBed.createComponent(AddProductComponent);
    const app = fixture.componentInstance;
    expect(app.formGroup.valid).toBeFalsy();
    app.formGroup.controls['name'].setValue("qwert")
    app.formGroup.controls['category'].setValue("qwertty")
    app.formGroup.controls['price'].setValue(555)
    app.formGroup.controls['description'].setValue("qwertqweq")
    app.formGroup.controls['image'].setValue("photo.jpg")
    app.formGroup.controls['rating'].setValue(4)
    expect(app.formGroup.valid).toBeTruthy();
  });

  it('Form Submitted with invalid data', () => {
    const fixture = TestBed.createComponent(AddProductComponent);
    const app = fixture.componentInstance;
    expect(app.formGroup.valid).toBeFalsy();
    app.formGroup.controls['name'].setValue('')
    app.formGroup.controls['category'].setValue("qwertty")
    app.formGroup.controls['price'].setValue(555)
    app.formGroup.controls['description'].setValue("qwertqweq")
    app.formGroup.controls['image'].setValue("photo.jpg")
    app.formGroup.controls['rating'].setValue(4)
    expect(app.formGroup.valid).toBeFalsy();
  });
});
