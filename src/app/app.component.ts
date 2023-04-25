import { Component, OnInit } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './authconfig/sso.config';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NavbarComponent, NgIf, RouterOutlet]
})
export class AppComponent implements OnInit {
  title: string = 'sso1';
  username: any = '';

  constructor() {}
  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }

  get token() {
    return localStorage.getItem('access_token');
  }
}
