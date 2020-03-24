import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridGapComponent } from './grid-gap.component';

describe('GridGapComponent', () => {
  let component: GridGapComponent;
  let fixture: ComponentFixture<GridGapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridGapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridGapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
