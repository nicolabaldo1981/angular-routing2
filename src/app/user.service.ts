import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from './post';
import { User } from './user';

@Injectable()
export class UserService {
  private totPost$ = new BehaviorSubject<number>(0);
  totPostObs$ = this.totPost$.asObservable();

  constructor(private http: HttpClient) {
    this.totPostObs$.subscribe((r) => console.log(r));
  }

  setTotPost(value: number) {
    this.totPost$.next(value)
  }

  getUser(id: number) {
    return this.http.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getPostUser(id: number) {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
      params: {
        userId: id,
      },
    });
  }
}
