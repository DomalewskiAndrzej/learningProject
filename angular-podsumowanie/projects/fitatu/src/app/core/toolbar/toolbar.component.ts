import { Component } from '@angular/core';
import { AuthFacade } from '../../modules/auth/store/auth.facade';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private authFacade: AuthFacade) {}

  logout(): void {
    this.authFacade.logout();
  }
}
