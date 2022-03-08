import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  //user-ek lekérése
  list$: Observable<User | User[] | null | any> = this.userService.get();
  cols: any = this.config.userColumns;
  user: User = {} ;

  constructor(
    private userService: UserService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

  update(user:User): void{
    this.userService.update(user).toPromise().then(
      userResponse => console.log(userResponse),
      err => console.error(err)
    );
  }

}
