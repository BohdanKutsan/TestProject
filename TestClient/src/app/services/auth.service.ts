import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Auth_Api_Url } from '../app-injection-tokens';
import { Token } from '../models/token';
import { tap } from 'rxjs/operators';

export const Access_Token_Key = 'resource_access_token'
export interface User{
  id?: number,
  email: string;
  password: string;
  role?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    @Inject(Auth_Api_Url) private apiUrl: string,
    private  jwtHelper: JwtHelperService,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}api/auth/login`, {
      email, password
    }).pipe(
      tap(token => {
        localStorage.setItem(Access_Token_Key, token.access_token);
      })
    )
  }

  register(email: string, password: string):Observable<User> {
    return this.http.post<User>(`http://localhost:58937/api/auth/register`, {
      email, password
    })
  }

  isAuthenticated(): any {
    var token = localStorage.getItem(Access_Token_Key);
    return token && !this.jwtHelper.isTokenExpired(token)
  }

  logout(): void {
    localStorage.removeItem(Access_Token_Key);
    this.router.navigate([''])
  }

}


