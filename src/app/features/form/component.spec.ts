import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarhanFormComponent } from './component';

describe('SarhanFormComponent', () => {
  let component: SarhanFormComponent;
  let fixture: ComponentFixture<SarhanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarhanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarhanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
