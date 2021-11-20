import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralEncyclopediaComponent } from './components/general-encyclopedia/general-encyclopedia.component';
import { GeneralMenuComponent } from './components/general-menu/general-menu.component';
import { IndividualInfoComponent } from './components/individual-info/individual-info.component';

const routes: Routes = [
  {path: '', redirectTo:'mainMenu', pathMatch:'full'},
  {path:'mainMenu', component:GeneralMenuComponent},
  {path:'individual-info', component:IndividualInfoComponent},
  {path:'general-info', component:GeneralEncyclopediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
