import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { MoviesComponent } from './movies/movies.component'; // Replace with your actual component
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  { path: '', component: MoviesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: CallbackComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}