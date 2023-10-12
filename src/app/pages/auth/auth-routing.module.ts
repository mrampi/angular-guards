import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { rolesGuard } from 'src/app/guards/roles.guard';
import { saveGuard } from 'src/app/guards/save.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [rolesGuard],
    canDeactivate: [saveGuard],
    data: { role: 'admin', redirect: '/' }
  }, 
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
