import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgJsonEditorModule } from 'ang-jsoneditor';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, NgJsonEditorModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
