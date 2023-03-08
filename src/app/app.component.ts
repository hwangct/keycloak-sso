import { Component, OnInit } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './components/authconfig/sso.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
