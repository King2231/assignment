import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundInfoComponent } from './fund-info.component';

describe('FundInfoComponent', () => {
  let component: FundInfoComponent;
  let fixture: ComponentFixture<FundInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
