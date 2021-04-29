import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanhubSlideToggleComponent } from './planhub-slide-toggle.component';

describe('PlanhubSlideToggleComponent', () => {
  let component: PlanhubSlideToggleComponent;
  let fixture: ComponentFixture<PlanhubSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanhubSlideToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanhubSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
