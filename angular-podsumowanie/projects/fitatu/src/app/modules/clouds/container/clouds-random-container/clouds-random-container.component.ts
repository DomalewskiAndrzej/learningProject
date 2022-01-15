import { Component, OnInit } from '@angular/core';
import { Cloud } from 'projects/fitatu/src/app/shared/models/cloud.model';
import { CloudsFacade } from '../../store/clouds.facade';

@Component({
  selector: 'app-clouds-random-container',
  templateUrl: './clouds-random-container.component.html',
  styleUrls: ['./clouds-random-container.component.scss'],
})
export class CloudsRandomContainerComponent implements OnInit {
  toggle = false;
  height: string;
  position: string;
  description: string;
  clouds: Cloud[];
  clear;

  constructor(private cloudsFacade: CloudsFacade) {}

  ngOnInit(): void {
    this.cloudsFacade.loadClouds();
    this.cloudsFacade.clouds$.subscribe((clouds: Cloud[]) => {
      this.clouds = clouds;
    });
    setInterval(() => {
      const randomHeight =
        Math.floor(Math.random() * (window.innerHeight - 214)) + 74;
      this.height = randomHeight + 'px';
      const randomPostion = Math.random();
      if (randomPostion < 0.5) {
        this.position = 10 + 'px';
      } else {
        this.position = window.innerWidth - 240 + 'px';
      }
      const randomDescription = Math.floor(
        Math.random() * this.clouds.length + 1
      );
      this.description = this.clouds[randomDescription - 1].title;

      this.toggle = true;
      this.clear = setTimeout(() => {
        this.toggle = false;
      }, 10000);
    }, 120000);
  }

  onToggle(): void {
    this.toggle = !this.toggle;
    clearTimeout(this.clear);
  }
}
