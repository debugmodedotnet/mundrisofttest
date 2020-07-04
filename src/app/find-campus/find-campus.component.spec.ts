import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCampusComponent } from './find-campus.component';

describe('FindCampusComponent', () => {
  let component: FindCampusComponent;
  let fixture: ComponentFixture<FindCampusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCampusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
