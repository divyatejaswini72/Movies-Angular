import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesListComponent } from './movies-list/movies-list/movies-list.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies/upcoming-movies.component';

const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'upcoming', component: UpcomingMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
