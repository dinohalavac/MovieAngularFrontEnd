import { AuthConfig } from 'angular-oauth2-oidc';
import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';

export function createAuthConfig(): AuthConfig {
  const platformId = inject(PLATFORM_ID);

  const redirectUri = isPlatformBrowser(platformId)
    ? window.location.origin + '/callback'
    : '';

  return {
    issuer: 'http://localhost:5200',
    redirectUri:'http://localhost:4200/movies',
    clientId: 'angular-spa',
    responseType: 'code',
    scope: 'openid profile proxy-api',
    showDebugInformation: true,
    strictDiscoveryDocumentValidation: false,
  };
}