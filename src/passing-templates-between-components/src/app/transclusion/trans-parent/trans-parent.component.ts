import { Component } from '@angular/core';

@Component({
  selector: 'app-trans-parent',
  template: `
    <app-trans-child [model]="model">
        <p>This model is {{model}}</p>
    </app-trans-child>
  `,
  styleUrls: ['./trans-parent.component.less']
})
export class TransParentComponent {

  public model = 'SetByParent';

}
