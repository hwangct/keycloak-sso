import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: environment.keycloak.issuer,

  // URL of the SPA to redirect the user to after login
  //redirectUri: window.location.origin + '/index.html',
  redirectUri: environment.keycloak.redirectUri,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: environment.keycloak.clientId,

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: environment.keycloak.scope,

  // Sample Provider 2
  responseType: 'code',

  requireHttps: false,
  showDebugInformation: true,
};
