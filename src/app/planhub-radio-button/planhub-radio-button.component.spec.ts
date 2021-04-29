import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanhubRadioButtonComponent } from './planhub-radio-button.component';

describe('PlanhubRadioButtonComponent', () => {
  let component: PlanhubRadioButtonComponent;
  let fixture: ComponentFixture<PlanhubRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanhubRadioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanhubRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
