import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor{

  constructor() {
   }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // @todo: add Auth
    req = req.clone({
      setHeaders: {
        Accept: "application/json"
      }
    })
    return next.handle(req)
  }
}
