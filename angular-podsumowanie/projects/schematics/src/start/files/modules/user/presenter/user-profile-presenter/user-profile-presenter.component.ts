import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/user.model';

@Component({
  selector: 'app-user-profile-presenter',
  templateUrl: './user-profile-presenter.component.html',
  styleUrls: ['./user-profile-presenter.component.scss'],
})
export class UserProfilePresenterComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit(): void {}
}
