import { Component, OnInit, VERSION } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  logged
  constructor(private as: AuthService) {}

  ngOnInit() {
    this.as.logged$.subscribe((res) => (this.logged = res));
  }
}
