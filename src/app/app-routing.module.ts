import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ObservablesComponent } from './pages/observables/observables.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    title: 'About',
    loadComponent: () =>
      import('./pages/about/about.component').then(
        (comp) => comp.AboutComponent
      ),
  },
  {
    path: 'observables',
    title: 'Observables',
    component: ObservablesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
