import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateConsumingComponent } from './template-consuming.component';

describe('TemplateConsumingComponent', () => {
  let component: TemplateConsumingComponent;
  let fixture: ComponentFixture<TemplateConsumingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateConsumingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateConsumingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
