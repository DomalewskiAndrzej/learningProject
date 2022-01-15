import { Component, OnInit } from '@angular/core';
import { Observable } from 'projects/schematics/node_modules/rxjs';
import { User } from '../../../../shared/models/user.model';
import { UserFacade } from '../../store/user.facade';

@Component({
  selector: 'app-user-profile-container',
  templateUrl: './user-profile-container.component.html',
  styleUrls: ['./user-profile-container.component.scss'],
})
export class UserProfileContainerComponent implements OnInit {
  user: Observable<User> = this.userFacade.user$;

  constructor(private userFacade: UserFacade) {}

  ngOnInit(): void {
    this.userFacade.loadUser();
  }
}
