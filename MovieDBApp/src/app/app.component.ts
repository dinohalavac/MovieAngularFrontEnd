import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports:[RouterOutlet,NgIf]
})
export class AppComponent {
  title = 'FlixSample-API';

  constructor(private router: Router) {}
  login() {
    // Redirect to your login component/page
    this.isLoggedIn = true;
    this.router.navigate(['/login']);
  }
  isLoggedIn = false;

  

  logout() {
    // Handle logout logic
    this.isLoggedIn = false;
  }
  goHome() {
    this.router.navigate(['/home']);
}}
