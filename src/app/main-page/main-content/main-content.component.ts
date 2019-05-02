import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  public page1: boolean = false;
  public page2: boolean = true;
  public page3: boolean = true;
  public userData;

  constructor( private userService: UserService) { }

  ngOnInit() {
    this.page1 = false;
    this.getUserInfo();
  }

  getUserInfo() {
    this.userService.getUser(localStorage.getItem('UserId'))
      .subscribe(data => {
        this.userData = data;
      });
  }
}
