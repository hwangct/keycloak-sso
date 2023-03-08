import { Component } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from 'src/app/components/authconfig/sso.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userInfo: string = '';
  constructor(private oauthService: OAuthService) {}

  ngOnInit(): void {
    let userClaims: any = this.oauthService.getIdentityClaims();
    this.userInfo = JSON.stringify(userClaims, undefined, 2);
  }

  configureSingleSignOn() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
