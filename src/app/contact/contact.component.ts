import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { forkJoin, delay } from 'rxjs';
import { Post } from '../post';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private route: ActivatedRoute, private s: UserService) {}

  currentUser: User & { posts: Post[] };

  ngOnInit() {
    this.route.paramMap.subscribe((p) => {
      this.currentUser = null;
      const user_id = +p.get('id');

      forkJoin([this.s.getUser(user_id), this.s.getPostUser(user_id)])
        .pipe(delay(500))
        .subscribe(([users, posts]) => {
          this.currentUser = { ...users, posts: posts };
          this.s.setTotPost(posts.length);
        });
    });
  }
}
