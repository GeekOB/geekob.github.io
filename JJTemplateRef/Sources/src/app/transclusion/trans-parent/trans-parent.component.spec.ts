import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransParentComponent } from './trans-parent.component';

describe('TransParentComponent', () => {
  let component: TransParentComponent;
  let fixture: ComponentFixture<TransParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
