import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trans-child',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
    <button (click)="setModel()">Set Model By Child</button>
  `,
  styleUrls: ['./trans-child.component.less']
})
export class TransChildComponent {

  @Input() model: string;

  setModel(): void {
    this.model = 'SetByChild';
  }
}
