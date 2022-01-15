import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-author-view-presenter',
  templateUrl: './author-view-presenter.component.html',
  styleUrls: ['./author-view-presenter.component.scss'],
})
export class AuthorViewPresenterComponent {
  @Output() back = new EventEmitter<void>();

  onBack(): void {
    this.back.emit();
  }
}
