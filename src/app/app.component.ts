import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { MessagesComponent } from './messages/messages.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MessagesComponent,
    RouterModule,
    HttpClientInMemoryWebApiModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tour-of-heroes';

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
