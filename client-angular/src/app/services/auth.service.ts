import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { API_URL, BASE_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = "authenticadedUser"

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

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null);
  }

}
