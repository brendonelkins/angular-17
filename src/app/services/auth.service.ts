import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

//BehaviorSubject?

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private validUsername = 'admin';
  private validPassword = 'password';

  private authState = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.authState.asObservable();

  // constructor(private router: Router) {}
  private router = inject(Router);

  //difference between constuctor and inject?

  login(username: string, password: string): boolean {
    if (username === this.validUsername && password === this.validPassword) {
      this.authState.next(true);
      localStorage.setItem('token', username);
      return true;
    }
    return false;
  }

  logout() {
    this.authState.next(false);
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.authState.value;
  }
}
