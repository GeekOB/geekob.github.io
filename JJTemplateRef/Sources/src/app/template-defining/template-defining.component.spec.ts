import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDefiningComponent } from './template-defining.component';

describe('TemplateDefiningComponent', () => {
  let component: TemplateDefiningComponent;
  let fixture: ComponentFixture<TemplateDefiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDefiningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDefiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
