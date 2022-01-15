import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clouds-random-presenter',
  templateUrl: './clouds-random-presenter.component.html',
  styleUrls: ['./clouds-random-presenter.component.scss'],
})
export class CloudsRandomPresenterComponent {
  @Input() toggle: boolean;
  @Input() height: string;
  @Input() position: string;
  @Input() description: string;
  @Output() toggleFunction = new EventEmitter<void>();

  onToggle(): void {
    this.toggleFunction.emit();
  }
}
