import { Component, OnInit } from '@angular/core';
import { Training } from 'projects/fitatu/src/app/shared/models/training.model';
import { Observable } from 'rxjs';
import { TrainingFacade } from '../../store/training.facade';

@Component({
  selector: 'app-training-plans-container',
  templateUrl: './training-plans-container.component.html',
  styleUrls: ['./training-plans-container.component.scss'],
})
export class TrainingPlansContainerComponent implements OnInit {
  trainings: Observable<Training[]> = this.trainingFacade.plans$;
  path = 1;

  constructor(private trainingFacade: TrainingFacade) {}

  ngOnInit(): void {
    this.trainingFacade.loadPlans();
  }
}
