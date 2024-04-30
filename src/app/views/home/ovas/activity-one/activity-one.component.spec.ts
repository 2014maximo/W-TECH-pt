import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityOneComponent } from './activity-one.component';

describe('ActivityOneComponent', () => {
  let component: ActivityOneComponent;
  let fixture: ComponentFixture<ActivityOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityOneComponent]
    });
    fixture = TestBed.createComponent(ActivityOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
