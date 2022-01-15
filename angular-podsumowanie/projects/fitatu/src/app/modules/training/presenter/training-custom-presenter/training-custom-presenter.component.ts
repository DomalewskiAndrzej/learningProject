import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'projects/fitatu/src/app/shared/models/training.model';

@Component({
  selector: 'app-training-custom-presenter',
  templateUrl: './training-custom-presenter.component.html',
  styleUrls: ['./training-custom-presenter.component.scss'],
})
export class TrainingCustomPresenterComponent {
  @Input() path: number;
  @Input() set trainings(trainings: Training[]) {
    this._trainings = trainings;
  }
  get trainings(): Training[] {
    return this._trainings;
  }
  _trainings: Training[];
  displayedColumns: string[] = ['exercises', 'series', 'rpe', 'rest'];

  constructor(private router: Router) {}

  loadPath(): void {
    if (this.path) {
      this.router.navigate(['/training/custom']);
    } else {
      this.router.navigate(['/training/plans']);
    }
  }
}
