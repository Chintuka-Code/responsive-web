import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPart1Component } from './grid-part1.component';

describe('GridPart1Component', () => {
  let component: GridPart1Component;
  let fixture: ComponentFixture<GridPart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
