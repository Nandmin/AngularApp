import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
  // {
  // providedIn: 'root' // manuálisan állítva az app.module-ban
// }
)
export class JwtInterceptorService implements HttpInterceptor{

  constructor(
    private auth: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const currentUser = this.auth.currentUserValue;
    const currentToken = this.auth.lastToken;

    // if(currentUser && currentUser.token){
      if (currentToken) {
      // a requestet nem szabad módosítani, ezért kell klónozni
      // a beérkezú adaton nem változtatunk, csak hozzáadjuk a token-t
      request = request.clone({
        setHeaders: {
          //Authorization: `Bearer ${currentUser.token}`
          Authorization: `Bearer ${currentToken}`
        }
      });
    }
    return next.handle(request);
  }
}
