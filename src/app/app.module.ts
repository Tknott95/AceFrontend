import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

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
import { FooterComponent } from './components/footer/footer.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { LangCaraComponent } from './components/lang-cara/lang-cara.component';
import { ContactSecComponent } from './components/contact-sec/contact-sec.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about',      component: AboutComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'conact', component: ContactPageComponent}
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    IntroSectionComponent,
    LangCaraComponent,
    ContactSecComponent,
    BlogComponent,
    AboutComponent,
    LandingComponent,
    ContactPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
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
