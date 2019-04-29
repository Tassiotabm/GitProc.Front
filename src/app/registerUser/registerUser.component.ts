import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../service/user.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { Advogado } from '../model/user.model';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  addForm: FormGroup;
  register: Advogado;
  ngOnInit() {
    this.register = new Advogado();
    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      nomeCompleto: ['', Validators.required],
      oab: ['', Validators.required],
      endereco: ['', Validators.required]
    });
  }

  loadAdvogado() {
    this.register.CEP = this.addForm.get('endereco').value;
    this.register.Login = this.addForm.get('email').value;
    this.register.OAB = this.addForm.get('oab').value;
    this.register.Name = this.addForm.get('nomeCompleto').value;
    this.register.Password = "senha";
  }

  save() {
    this.loadAdvogado();
    this.userService.createUser(this.register)
      .subscribe(data => {
        this.router.navigate(['login']);
      });
  }

  goBack() {
    this.router.navigate(['login']);
  }
}
