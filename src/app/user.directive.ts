import { Directive, ElementRef } from '@angular/core';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appUser]',
})
export class UserDirective {
  constructor(private el: ElementRef, private s: AuthService) {
    this.s.logged$.subscribe(
      (res) =>
        (this.el.nativeElement.style.backgroundColor = res
          ? 'yellow'
          : 'transparent')
    );
  }
}
