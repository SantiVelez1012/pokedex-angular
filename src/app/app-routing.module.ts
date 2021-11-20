import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralMenuComponent } from './components/general-menu/general-menu.component';
import { IndividualInfoComponent } from './components/individual-info/individual-info.component';

const routes: Routes = [
  {path: '', redirectTo:'pokedex', pathMatch:'full'},
  {path:'pokedex', component:GeneralMenuComponent},
  {path:'individual-info', component:IndividualInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
