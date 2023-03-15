import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { AstroComponentsModule } from '@astrouxds/angular';
import { AuthConfigModule } from './authconfig/auth.config.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    AstroComponentsModule,
    AuthConfigModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
