import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  logged$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  login() {
    this.logged$.next(true);
  }

  logout() {
    this.logged$.next(false);
  }
}
