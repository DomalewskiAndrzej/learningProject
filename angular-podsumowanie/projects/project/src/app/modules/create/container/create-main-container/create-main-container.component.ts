import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-main-container',
  templateUrl: './create-main-container.component.html',
  styleUrls: ['./create-main-container.component.scss'],
})
export class CreateMainContainerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  back(): void {
    this.router.navigate(['']);
  }
}
