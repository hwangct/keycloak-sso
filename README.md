# KeycloakSso1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## References

- https://www.keycloak.org/documentation
- https://www.npmjs.com/package/angular-oauth2-oidc

## Install Keycloak

- Install Keycloak
- Download [here](https://www.keycloak.org/downloads)
- Extract the package and start the server using the bin/kc.sh script

### Configure Keycloak

- Navigate to localhost:8080
- Log into the Administration console
- Create realm
- Create new client
  - Set Client Type to OpenID Connect
  - Set Client ID (sso1)
  - Turn Client authentication off for the front end client. Rest API server can be a bearer-only client, which may still fall into the “public” client category.

## Angular SSO implementation

- Install angular-oauth2-oidc:
  - npm i angular-oauth2-oidc –save
- Install JWKS TokenValidator
  - npm i angular-oauth2-oidc-jwks --save
- Import libraries into app.module.ts
- Create AuthConfig file provided
- Use OAuthService in Angular component
  - Inject OAuthService in constructor
  - Create a function for SSO (e.g. configureSignOn) and add the following:
    - Configure the OAuthService using the AuthConfig file
      - `this.oauthService.configure(authConfig);`
    - Initialize the JWKS Validation handler
      - `this.oauthService.tokenValidationHandler = new JwksValidationHandler();`
    - Load document and try to log in
      - `this.oAuthService.loadDiscoverDocumentAndTryLogin();`
- Create login function in Angular component (e.g. header) with the following:
  - `this.oauthService.initCodeFlow();`
- Create logout function in Angular component (e.g. header) with the following:
  - `this.oauthService.logout();`
- Create get tokens function in Angular component(eg. header) with the following:
  - `let claims: any = this.oauthService.getIdentityClaims();`
  - `return claims ? claims : null; `
- Create Route guard to protect routes without authentication
  - `ng g guard auth`
    - Inject OAuthService in constructor
    - Check for valid ID and valid Access token in a canActivate() function
      - `let hasIdToken = this.oauthService.hasValidIdToken();`
      - `let hasAccessToken = this.oauthService.hasValidAccessToken();`
      - `return hasIdToken && hasAccessToken;`
    - Add guard to router path
      - `{ path: ‘home’, component: HomeComponent, canActivate: [AuthGuard] }`

## Squashed
