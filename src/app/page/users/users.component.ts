import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { select, Store } from '@ngrx/store';
import { getItems } from '../../../store/user/userActions';
import { selectItems } from '../../../store/user/userReducers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  //user-ek lekérése
  list$: Observable<User | User[] | null | any> = this.userService.get();
  // userek lekérése ngrx-el
  //list$ = Observable<User | User[]>;
  cols: any = this.config.userColumns;
  user: User | User[] | any = {} ;

  constructor(
    private userService: UserService,
    private config: ConfigService,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getItems());
    //this.list$ = this.store.pipe(select(selectItems));
  }

  update(user:User): void{
    this.userService.update(user).toPromise().then(
      userResponse => console.log(userResponse),
      err => console.error(err)
    );
  }

}
