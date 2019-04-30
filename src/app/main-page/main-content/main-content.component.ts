import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  public page1: boolean = false;
  public page2: boolean = true;
  public page3: boolean = true;

  constructor() { }

  ngOnInit() {
    this.page1 = false;
  }

}
