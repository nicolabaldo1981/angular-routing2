import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  logged;
  constructor(private s: AuthService) {
    s.logged$.subscribe((res) => (this.logged = res));
  }

  ngOnInit() {}

  login() {
    this.s.login();
  }

  logout() {
    this.s.logout();
  }
}
