import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
//be kell implementálni a CanActivate-t is
export class AuthGuardService implements CanActivate {

  constructor(
    public auth: AuthService,
    public router: Router
    
  ) { }

  canActivate():boolean {
    // if(!this.auth.currentUserValue){
    //   this.router.navigate(['login']);
    //   return false;
    // }
    return true;
  }
}
