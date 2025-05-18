import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgIf } from '@angular/common';
import { OAuthModule } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports:[NgIf],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public authService: AuthService) {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

/*   get userName(): string | null {
    return this.authService.userName
  } */

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
}