import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { TemplateContainer } from '../models/templateContainer';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'template-defining',
  templateUrl: './template-defining.component.html',
  styleUrls: ['./template-defining.component.less']
})
export class TemplateDefiningComponent implements AfterViewInit {

  @ViewChild('blueTemplate')
  private blueTemplate: TemplateRef<never>;

  @ViewChildren(TemplateRef)
  private definedTemplates: QueryList<TemplateRef<never>>;

  public templateContainer: TemplateContainer;

  constructor() {
    console.log('TemplateDefiningComponent ctor');
    this.templateContainer = new TemplateContainer();
  }

  ngAfterViewInit(): void {
    console.log('TemplateDefiningComponent::ngAfterViewInit');

    console.log(this.definedTemplates.toArray());
    console.log(this.blueTemplate);

    this.templateContainer = {
      multipleTemplates: this.definedTemplates.toArray(),
      singleTemplate: this.blueTemplate
    };
  }
}
