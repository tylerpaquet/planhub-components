import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanhubSearchComponent } from './planhub-search.component';

describe('PlanhubSearchComponent', () => {
  let component: PlanhubSearchComponent;
  let fixture: ComponentFixture<PlanhubSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanhubSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanhubSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
