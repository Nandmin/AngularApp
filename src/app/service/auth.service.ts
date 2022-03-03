import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logInUrl= `${this.config.apiUrl}login`;
  logOutUrl= `${this.config.apiUrl}logout`;
  //currentUserSubject: User  = new User();
  currentUserSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  lastToken: string = ''; //user azonosítására szolgál

  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private router: Router

  ) { }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  logOut(): void{
    localStorage.removeItem('currentuser');
    this.currentUserSubject.next(null)
    this.router.navigate(['login']);
  }
}
