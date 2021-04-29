import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanhubInputComponent } from './planhub-input.component';

describe('PlanhubInputComponent', () => {
  let component: PlanhubInputComponent;
  let fixture: ComponentFixture<PlanhubInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanhubInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanhubInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
