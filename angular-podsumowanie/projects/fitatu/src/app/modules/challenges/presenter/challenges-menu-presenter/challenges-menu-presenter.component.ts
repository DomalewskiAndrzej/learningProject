import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-challenges-menu-presenter',
  templateUrl: './challenges-menu-presenter.component.html',
  styleUrls: ['./challenges-menu-presenter.component.scss'],
})
export class ChallengesMenuPresenterComponent {
  @Output() task = new EventEmitter<string>();

  taskReview(task: string): void {
    this.task.emit(task);
  }
}
