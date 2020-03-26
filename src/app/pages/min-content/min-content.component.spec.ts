import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinContentComponent } from './min-content.component';

describe('MinContentComponent', () => {
  let component: MinContentComponent;
  let fixture: ComponentFixture<MinContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
