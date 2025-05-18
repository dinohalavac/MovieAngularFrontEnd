import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  //{ path: '', redirectTo: 'movies', pathMatch: 'full' },   // default route
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect root to /home
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
   {path: 'login', component: LoginComponent },
   {path: 'callback', component: CallbackComponent},
   {path: 'home', component: HomeComponent}
];