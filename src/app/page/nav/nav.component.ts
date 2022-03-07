import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfigService } from '../../service/config.service';
import { AuthService } from '../../service/auth.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  navigation = this.config.navigation;
  loginStatus = false;    // figyeljük a bejelentkezés állapotát
  userSub!: Subscription; // ebben tároljuk a feliratokozásokat az observablekre
 // ebben tároljuk a feliratokozásokat az observablekre
  user: User | null = null;

  // first import configservive
  constructor(
    private config:ConfigService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    // feliratkozás, hogy értesüljek, ha változik a felhasználó állapota
    this.userSub = this.auth.currentUserSubject.subscribe(
      user => this.user = user
    );
  }

  ngOnDestroy(): void {
    // liratkozás, memória felszabadítása  
    this.userSub.unsubscribe();
  }

  onLogOut(){
    this.auth.logOut();
  }

}
