import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userFacade: UserFacade, private router: Router) {}

  ngOnInit(): void {
    this.userFacade.loadUser();
  }

  back(): void {
    this.router.navigate(['']);
  }
}
