import { Component, OnInit, ViewChild } from '@angular/core';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @ViewChild(MainContentComponent)
  private mainComponenet: MainContentComponent;

  constructor() { }

  ngOnInit() {
  }


  changePanel(component: any) {
    switch (component) {
      case 'editarConta': {
        this.mainComponenet.page2 = false;
        this.mainComponenet.page1 = true;
        this.mainComponenet.page3 = true;
        break;
      }
      case 'editarEscritorio': {
        this.mainComponenet.page3 = false;
        this.mainComponenet.page2 = true;
        this.mainComponenet.page1 = true;
        break;
      }
      default: {
        this.mainComponenet.page1 = false;
        this.mainComponenet.page2 = true;
        this.mainComponenet.page3 = true;
        break;
      }
    }
  }
}