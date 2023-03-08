import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { filter } from 'rxjs/operators';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

@Injectable()
export class AuthConfigService {
  // private _decodedAccessToken: any;
  // private _username: any;

  // get decodedAccessToken() {
  //   return this._decodedAccessToken;
  // }

  // get userName() {
  //   return this._username;
  // }

  constructor(
    private readonly oauthService: OAuthService,
    private readonly authConfig: AuthConfig
  ) {}

  async initAuth(): Promise<any> {
    return new Promise<void>((resolveFn, rejectFn) => {
      // setup oauthService
      this.oauthService.configure(this.authConfig);
      this.oauthService.setStorage(localStorage);
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();

      // subscribe to token events
      this.oauthService.events
        .pipe(
          filter((e: any) => {
            return e.type === 'token_received';
          })
        )
        .subscribe(() => this.handleNewToken());
      // disabling keycloak for now
      // resolveFn();
      // continue initializing app or redirect to login-page

      this.oauthService.loadDiscoveryDocumentAndLogin().then((isLoggedIn) => {
        if (isLoggedIn) {
          this.oauthService.setupAutomaticSilentRefresh();
          console.log(`stored refresh token`);
          resolveFn();
        } else {
          // this.oauthService.initImplicitFlow();
          console.log('logging in now!');
          this.oauthService.initCodeFlow();
          rejectFn();
        }
      });
    });
  }

  private handleNewToken() {
    // this._decodedAccessToken = this.oauthService.getAccessToken();
    localStorage.setItem('access_token', this.oauthService.getAccessToken());
    let userClaims: any = this.oauthService.getIdentityClaims();
    let username = userClaims.preferred_username
      ? userClaims.preferred_username
      : '';
    console.log(userClaims);
    localStorage.setItem('given_name', userClaims.given_name);
    localStorage.setItem('username', username);
  }
}
