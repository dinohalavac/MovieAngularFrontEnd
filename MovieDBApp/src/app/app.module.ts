import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';        // OAuth2 module

import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { MoviesComponent } from './movies/movies.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CallbackComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    CallbackComponent      // This provides OAuthService
  ],
  providers: [OAuthService, AuthService,OAuthModule],
  bootstrap: [AppComponent]
})
export class AppModule {}