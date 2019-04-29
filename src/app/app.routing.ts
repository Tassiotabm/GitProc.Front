import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterUserComponent } from "./registeruser/registeruser.component";
import { EditUserComponent } from "./edituser/edit-user.component";
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registeruser', component: RegisterUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'main-page', component: MainPageComponent },
  { path : '', component : LoginComponent }

];

export const routing = RouterModule.forRoot(routes);