import { RenderMode, ServerRoute } from '@angular/ssr';
import { Routes } from '@angular/router'; // ✅ Angular Routes type
import { LoginComponent } from './login/login.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },

];

export const routes: Routes = [
  { path: 'login', component: LoginComponent }
];