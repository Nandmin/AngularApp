import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { UsersComponent } from './page/users/users.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { AuthGuardService } from './service/auth-guard.service';
import { RoleGuardService } from './service/role-guard.service';

//authguard védi a főoldalt, users, users-edit-et
// a data ...-val szerepl alapján is be lehet állítani, adott siteot ki tekintheti meg
const routes: Routes = [
  { path: '', 
      component: HomeComponent, 
      canActivate: [AuthGuardService] },
  { path: 'login', 
      component: LoginComponent },
  { path: 'users', 
      component:UsersComponent, 
      canActivate: [AuthGuardService, RoleGuardService], 
      data:{ expectedRole: 2} },
  { path: 'user/edit/:id', 
      component: UserEditComponent, 
      canActivate: [AuthGuardService], 
      data:{ expectedRole: 3} },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
