import { Component, OnInit } from '@angular/core';
import { Training } from 'projects/fitatu/src/app/shared/models/training.model';
import { Observable } from 'rxjs';
import { TrainingFacade } from '../../store/training.facade';

@Component({
  selector: 'app-training-custom-container',
  templateUrl: './training-custom-container.component.html',
  styleUrls: ['./training-custom-container.component.scss'],
})
export class TrainingCustomContainerComponent implements OnInit {
  trainings: Observable<Training[]> = this.trainingFacade.trainings$;

  constructor(private trainingFacade: TrainingFacade) {}

  ngOnInit(): void {
    this.trainingFacade.loadTrainings();
  }
}
