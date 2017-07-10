import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MdToolbarModule,
  MdSidenavModule,
  MdListModule,
  MdProgressSpinnerModule,
  MdCardModule,
  MdInputModule,
  MdCheckboxModule,
  MdGridListModule
 } from '@angular/material';


/* Gesture Support (W/ M Design) */
import 'hammerjs';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdToolbarModule,
  MdSidenavModule,
  MdListModule,
  MdProgressSpinnerModule,
  MdCardModule,
  MdInputModule,
  MdCheckboxModule,
  MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
