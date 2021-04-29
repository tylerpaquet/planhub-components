import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanhubSelectComponent } from './planhub-select.component';

describe('PlanhubSelectComponent', () => {
  let component: PlanhubSelectComponent;
  let fixture: ComponentFixture<PlanhubSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanhubSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanhubSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
