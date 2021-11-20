import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralMenuComponent } from './components/general-menu/general-menu.component';
import { IndividualInfoComponent } from './components/individual-info/individual-info.component';
import { FooterMainComponent } from './components/layout/footer-main/footer-main.component';
import { GeneralEncyclopediaComponent } from './components/general-encyclopedia/general-encyclopedia.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralMenuComponent,
    IndividualInfoComponent,
    FooterMainComponent,
    GeneralEncyclopediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
