import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterUserComponent } from "./register-user/register-user.component";
import { MainPageComponent } from './main-page/main-page.component';
import { EditUserComponent } from './main-page/main-content/edituser/edit-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registeruser', component: RegisterUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'main-page', component: MainPageComponent },
  { path : '', component : LoginComponent }
];

export const routing = RouterModule.forRoot(routes);
