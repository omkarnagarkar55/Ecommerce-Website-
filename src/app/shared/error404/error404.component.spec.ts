import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error404Component } from './error404.component';

describe('Error404Component', () => {
  let component: Error404Component;
  let fixture: ComponentFixture<Error404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Error404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Error404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Error message check ', () => {
    const fixture = TestBed.createComponent(Error404Component);
    const app = fixture.componentInstance;
    expect(app.errorMessage).toEqual("Error 404 : Page not Found . Please enter a valid address.");
  });
});
