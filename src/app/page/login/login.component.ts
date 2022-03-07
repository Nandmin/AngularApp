import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../../model/user';
// import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  serverError = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  //
  onLogin(NgForm: NgForm): void{
    this.auth.login(NgForm.value).toPromise().then(
      userResponse => {
        if (this.auth.currentUserValue){
          this.router.navigate(['/']);
        }
      },
      err => {
        this.serverError = err.error;
          const to = setTimeout( () => {
            clearTimeout(to);
            this.serverError = '';
          }, 3000);        
      }
    )
  }
}

