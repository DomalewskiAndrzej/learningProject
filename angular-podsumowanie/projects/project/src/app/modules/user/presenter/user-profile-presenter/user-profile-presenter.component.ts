import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'projects/project/src/app/shared/models/user.model';

@Component({
  selector: 'app-user-profile-presenter',
  templateUrl: './user-profile-presenter.component.html',
  styleUrls: ['./user-profile-presenter.component.scss'],
})
export class UserProfilePresenterComponent implements OnInit {
  @Input() user: User;
  @Output() back = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onBack(): void {
    this.back.emit();
  }
}
