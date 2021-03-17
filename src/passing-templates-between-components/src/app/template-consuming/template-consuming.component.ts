import { AfterViewInit, TemplateRef } from '@angular/core';
import { Component, Input } from '@angular/core';
import { TemplateContainer } from '../models/templateContainer';

@Component({
  selector: 'template-consuming',
  templateUrl: './template-consuming.component.html',
  styleUrls: ['./template-consuming.component.less']
})
export class TemplateConsumingComponent implements AfterViewInit {

  @Input()
  templateContainer: TemplateContainer;

  @Input('blue-template')
  specificTemplate: TemplateRef<never>;

  constructor() {

    console.log('TemplateConsumingComponent ctor');
  }

  ngAfterViewInit(): void {

    console.log('TemplateConsumingComponent::ngAfterViewInit');

    console.log(this.specificTemplate);
    console.log(this.templateContainer);
  }
}


