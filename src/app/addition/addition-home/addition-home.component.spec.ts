import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionHomeComponent } from './addition-home.component';

describe('AdditionHomeComponent', () => {
  let component: AdditionHomeComponent;
  let fixture: ComponentFixture<AdditionHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdditionHomeComponent]
    });
    fixture = TestBed.createComponent(AdditionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
