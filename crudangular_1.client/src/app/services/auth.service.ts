import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://yourapiurl.com';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`https://localhost:7081/login`, { username, password })
      .pipe(tap(response => this.setSession(response.token)));
  }

  private setSession(token: string): void {
    localStorage.setItem('jwt_token', token);
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
  }

  get token(): string | null {
    return localStorage.getItem('jwt_token');
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwt_token'); // Sprawdza, czy token jest zapisany
  }
}
