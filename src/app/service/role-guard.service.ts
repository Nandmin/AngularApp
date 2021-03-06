import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // const expectedRole:number = route.data['expectedRole'];

    // if(!this.auth.currentUserValue || 
    //   //this.auth.currentUserValue.role < expectedRole
    //   ) {
    //   this.router.navigate(['forbidden']);
    //   return false;
    // }

    return true;
  }
}
