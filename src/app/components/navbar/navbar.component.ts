import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { NgIf } from '@angular/common';
import { AstroComponentsModule } from '@astrouxds/angular';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [RouterLink, AstroComponentsModule, NgIf]
})
export class NavbarComponent {
  @Input() username: string = '';
  constructor(private router: Router, private oauthService: OAuthService) {}

  logout() {
    this.oauthService.logOut();
  }
  showInfo() {
    this.router.navigate(['/home']);
  }

  get token() {
    let claims: any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }
}
