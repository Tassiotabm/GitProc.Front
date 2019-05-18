import { Component, OnInit, Input } from '@angular/core';
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

  @Input() escritorioDataInput;

  constructor( ) { 
    this.page2 = true;
    this.page3 = true;
  }

  ngOnInit() {
    this.page1 = false;
  }
}
