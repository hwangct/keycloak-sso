import { Component } from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
    standalone: true
})
export class WelcomeComponent {
  given_name: string | null = localStorage.getItem('given_name');
}
