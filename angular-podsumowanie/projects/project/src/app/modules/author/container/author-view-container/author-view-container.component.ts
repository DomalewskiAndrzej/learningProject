import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-view-container',
  templateUrl: './author-view-container.component.html',
  styleUrls: ['./author-view-container.component.scss'],
})
export class AuthorViewContainerComponent {
  constructor(private router: Router) {}

  back(): void {
    this.router.navigate(['']);
  }
}
