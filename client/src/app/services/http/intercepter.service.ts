import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor{

  constructor(
    private authService: AuthService
  ) {
   }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authHeaderString = this.authService.getAuthenticatedToken();
    let username = this.authService.getAuthenticatedUser();
    
    let headers: any = {};
    headers['Accept'] = "application/json"
    
    if(authHeaderString && username) {
      headers['Authorization'] = authHeaderString
    }

    req = req.clone({
      setHeaders: {
        ...headers
      }
    })
    return next.handle(req)
  }
}
