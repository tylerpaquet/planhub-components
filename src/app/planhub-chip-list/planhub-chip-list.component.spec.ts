import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanhubChipListComponent } from './planhub-chip-list.component';

describe('PlanhubChipComponent', () => {
  let component: PlanhubChipListComponent;
  let fixture: ComponentFixture<PlanhubChipListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanhubChipListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanhubChipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
