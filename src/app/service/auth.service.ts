import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logInUrl= `${this.config.apiUrl}login`;
  logOutUrl= `${this.config.apiUrl}logout`;
  storageName = 'currentUser';
  //currentUserSubject: User  = new User();
  currentUserSubject: BehaviorSubject<User | User[] | null | any> = new BehaviorSubject(null);
  lastToken: string = ''; //user azonosítására szolgál

  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
  ) { }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  // sikeres login esetén, a szerver visszaad egy tokent, amit le kell tárolni a user azonosításhoz
  login(loginData: User): Observable<{ accessToken: string } | User | User[]> {
    alert(this.currentUserSubject.value);
    return this.currentUserSubject.value;
    // ------------ not working at the moment ------
    // return this.http.post<{ accesToken: string }>(
    //   this.logInUrl,
    //   { email: loginData.email, password: loginData.password }
    //   )
    //   .pipe( switchMap( response => {
    //     if(response.accesToken) {
    //       this.lastToken = response.accesToken;
    //       return this.userService.query(`email=${loginData.email}`);
    //     }
    //     return of(null);
    //   }))
    //   .pipe(
    //     tap( user => {
    //       if (!user) {
    //         localStorage.removeItem(this.storageName);
    //         this.currentUserSubject.next(null);
    //       }
    //       else {
    //         user[0].token = this.lastToken;
    //         localStorage.setItem(this.storageName, JSON.stringify(user[0]));
    //         this.currentUserSubject.next(user[0]);
    //       }
    //     })
    //   );
  }

  logOut(): void{
    localStorage.removeItem(this.storageName);
    this.currentUserSubject.next(null)
    this.router.navigate(['login']);
  }
}
