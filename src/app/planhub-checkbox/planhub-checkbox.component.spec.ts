import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanhubCheckboxComponent } from './planhub-checkbox.component';

describe('PlanhubCheckboxComponent', () => {
  let component: PlanhubCheckboxComponent;
  let fixture: ComponentFixture<PlanhubCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanhubCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanhubCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
