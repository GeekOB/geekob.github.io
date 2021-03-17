import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateDefiningComponent } from './template-defining/template-defining.component';
import { TemplateConsumingComponent } from './template-consuming/template-consuming.component';
import { TransParentComponent } from './transclusion/trans-parent/trans-parent.component';
import { TransChildComponent } from './transclusion/trans-child/trans-child.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDefiningComponent,
    TemplateConsumingComponent,
    TransParentComponent,
    TransChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
