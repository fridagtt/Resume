import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipsComponent } from './leaderships.component';

describe('LeadershipsComponent', () => {
  let component: LeadershipsComponent;
  let fixture: ComponentFixture<LeadershipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
