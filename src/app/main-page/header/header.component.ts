import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output() changePanel = new EventEmitter<any>();
  @Input() userData: any;
  
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
