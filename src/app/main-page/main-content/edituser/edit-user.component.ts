import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) { }

  ngOnInit() {
    // let userId = localStorage.getItem("editUserId");
    // if(!userId) {
    //   alert("Invalid action.")
    //   this.router.navigate(['list-user']);
    //   return;
    // }
    this.editForm = this.formBuilder.group({
      email: ['', Validators.required],
      nomeCompleto: ['', Validators.required],
      oab: ['', Validators.required],
      endereco: ['', Validators.required]
    });
    // this.userService.getUserById(+userId)
    //   .subscribe( data => {
    //     this.editForm.setValue(data);
    //   });
  }

  onSubmit() {
    // this.userService.updateUser(this.editForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate(['list-user']);
    //     },
    //     error => {
    //       alert(error);
    //     });
  }

}
