import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanhubCardComponent } from './planhub-card.component';

describe('PlanhubCardComponent', () => {
  let component: PlanhubCardComponent;
  let fixture: ComponentFixture<PlanhubCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanhubCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanhubCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
