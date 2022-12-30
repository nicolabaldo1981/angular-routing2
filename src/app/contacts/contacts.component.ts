import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  users;

  constructor(private s: UserService) {
    this.s.getUsers();
  }

  ngOnInit() {
    this.s.getUsers().subscribe((res) => (this.users = res));
  }
}
