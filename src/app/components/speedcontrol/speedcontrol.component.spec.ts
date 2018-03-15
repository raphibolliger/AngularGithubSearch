import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedcontrolComponent } from './speedcontrol.component';

describe('SpeedcontrolComponent', () => {
  let component: SpeedcontrolComponent;
  let fixture: ComponentFixture<SpeedcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
