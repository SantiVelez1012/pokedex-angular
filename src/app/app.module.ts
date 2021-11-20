import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralMenuComponent } from './components/general-menu/general-menu.component';
import { IndividualInfoComponent } from './components/individual-info/individual-info.component';
import { FooterMainComponent } from './components/layout/footer-main/footer-main.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralMenuComponent,
    IndividualInfoComponent,
    FooterMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
