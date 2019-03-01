import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'

import { API_URL, BASE_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = "authenticadedUser";
export const AUTHENTICATED_ADMIN_USER = "authenticadedAdminUser";
export const ROLE_USER = "ROLE_USER";
export const ROLE_ADMIN = "ROLE_ADMIN";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  executeJWTAuthenticationService(email, password) {
    return this.http.post<any>(
      BASE_URL + "/login_check",{
        username: email,
        password: password
      })
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, email)
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)

            let roles = data.data ? data.data.roles : [ROLE_USER];

            // Only for display and Routes Guards
            if(roles.indexOf(ROLE_ADMIN) > -1) {
              sessionStorage.setItem(AUTHENTICATED_ADMIN_USER, "1");
            }
            return data
          }
        )
      )
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN)
    }
  }

  logout(): Observable<void> {
    return Observable.create(
      (observer) => {
        sessionStorage.removeItem(AUTHENTICATED_USER);
        sessionStorage.removeItem(TOKEN);
        sessionStorage.removeItem(AUTHENTICATED_ADMIN_USER);
        observer.next();
      }
    )
  }

  isUserLoggedIn(): boolean {
    
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  isUserAdmin(): boolean {
    let isAdmin = sessionStorage.getItem(AUTHENTICATED_ADMIN_USER);
    return !(isAdmin === null);
  }

}
