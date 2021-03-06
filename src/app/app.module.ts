import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from "./app.routing";
import { AuthenticationService } from "./service/auth.service";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./service/user.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './main-page/header/header.component';
import { MainContentComponent } from './main-page/main-content/main-content.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { EditUserComponent } from './main-page/main-content/edituser/edit-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ModalModule, BsModalRef } from 'ngx-bootstrap';
import { ProcessosComponent } from './main-page/main-content/processos/processos.component';
import { EscritorioComponent } from './main-page/main-content/escritorio/escritorio.component';
import { ProcessService } from './service/process.service';
import { SanitizeHtmlDirective } from './util/sanitize-html.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    EditUserComponent,
    MainPageComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    ProcessosComponent,
    EscritorioComponent,
    SanitizeHtmlDirective
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [AuthenticationService, UserService,BsModalRef,ProcessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
