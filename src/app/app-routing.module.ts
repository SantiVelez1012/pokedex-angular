import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralMenuComponent } from './components/general-menu/general-menu.component';

const routes: Routes = [
  {path: '', redirectTo:'pokedex', pathMatch:'full'},
  {path:'pokedex', component:GeneralMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
