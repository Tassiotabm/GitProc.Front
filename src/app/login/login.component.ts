import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AuthenticationService} from "../service/auth.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private authService: AuthenticationService) {

     }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
 
    this.authService.login(this.loginForm.controls.email.value,this.loginForm.controls.password.value).subscribe(
      x => {
        this.router.navigate(['main-page']);
      },
      err => {
        this.router.navigate(['login']);
      },
    );
  }

  cadastro(){
    this.router.navigate(['registeruser']);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
