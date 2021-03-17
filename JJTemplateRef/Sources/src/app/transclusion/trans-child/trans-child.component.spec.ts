import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransChildComponent } from './trans-child.component';

describe('TransChildComponent', () => {
  let component: TransChildComponent;
  let fixture: ComponentFixture<TransChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
