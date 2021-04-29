import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanhubButtonComponent } from './planhub-button.component';

describe('PlanhubButtonComponent', () => {
  let component: PlanhubButtonComponent;
  let fixture: ComponentFixture<PlanhubButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanhubButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanhubButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
