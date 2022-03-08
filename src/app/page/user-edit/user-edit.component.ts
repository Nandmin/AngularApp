import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import { switchMap, take } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user: User | User[] | any  = null;
  serverError = '';

  constructor(
    private userService: UserService,
    private ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ar.params.pipe(
      switchMap(params => this.userService.get(params['id']))
    )
    //take(1): csak az első válaszig fut. kiveszi az adatot és leiratkozik
    .pipe( take(1))
    .subscribe(
      user => { 
        // típus átalakítás
        this.user = (user as User);
        this.user.password = '';
      }
    );
  }

  onSubmit(ngForm: NgForm): void {
    // adatok összevonása - mint a concat
    const putObject = Object.assign({id: this.user.id}, ngForm.value);
    this.userService.update(putObject).toPromise()
      .then(
        user => history.back(),
        err => {
            this.serverError = err.error;
            const to = setTimeout( () => {
              clearTimeout(to);
              this.serverError = '';
            }, 3000);
          }
      );
  }
      
  

}
