import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsmainComponent } from './newsmain.component';

describe('NewsmainComponent', () => {
  let component: NewsmainComponent;
  let fixture: ComponentFixture<NewsmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
