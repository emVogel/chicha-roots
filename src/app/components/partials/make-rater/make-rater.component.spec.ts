import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeRaterComponent } from './make-rater.component';

describe('MakeRaterComponent', () => {
  let component: MakeRaterComponent;
  let fixture: ComponentFixture<MakeRaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeRaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeRaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
