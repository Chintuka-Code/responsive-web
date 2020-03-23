import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAnimation1Component } from './nav-bar-animation1.component';

describe('NavBarAnimation1Component', () => {
  let component: NavBarAnimation1Component;
  let fixture: ComponentFixture<NavBarAnimation1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarAnimation1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarAnimation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
