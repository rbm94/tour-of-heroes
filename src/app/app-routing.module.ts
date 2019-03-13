import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { componentRefresh } from '@angular/core/src/render3/instructions';

const routes: Routes = [
  {
    path: '',
    component: HeroesListComponent
  },
  {
    path: 'edit/:id',
    component: HeroEditComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
