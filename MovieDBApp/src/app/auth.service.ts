import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { createAuthConfig } from './auth.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userName: string | null | undefined;
  constructor(public oauthService: OAuthService) {
    const config = createAuthConfig();
    this.oauthService.configure(config);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(): void {
    this.oauthService.initLoginFlow();
  }

  logout(): void {
    this.oauthService.logOut();
  }

  get isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();
  }
}