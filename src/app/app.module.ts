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
  MdGridListModule,
  MdTabsModule,
    MdButtonModule
 } from '@angular/material';

/* Services */
import { BlogService } from './services/blog.service';

import { HttpModule } from '@angular/http';

/* PIPES */
import { ReversePipe } from './pipes/reverse.pipe';


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
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { QuoteWidgetComponent } from './components/quote-widget/quote-widget.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about',      component: AboutComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'contact', component: ContactPageComponent}
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
    ContactPageComponent,
    ContactFormComponent,
    QuoteWidgetComponent,
    ReversePipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdProgressSpinnerModule,
    MdCardModule,
    MdInputModule,
    MdCheckboxModule,
    MdGridListModule,
    MdTabsModule,
    MdButtonModule
  ],
  providers: [
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
