import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output() changePanel = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['login']);
  }

  changeComponent(component: string) {
    this.changePanel.emit(component);
  }
}
