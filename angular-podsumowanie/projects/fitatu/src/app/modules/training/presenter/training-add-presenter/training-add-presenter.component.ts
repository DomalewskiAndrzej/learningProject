import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Exercise } from 'projects/fitatu/src/app/shared/models/exercise.model';

@Component({
  selector: 'app-training-add-presenter',
  templateUrl: './training-add-presenter.component.html',
  styleUrls: ['./training-add-presenter.component.scss'],
})
export class TrainingAddPresenterComponent implements OnInit {
  @Output() exerciseFade = new EventEmitter<void>();
  @Output() exercise = new EventEmitter<Exercise>();
  exerciseForm: FormGroup;
  errorMessage: string;

  ngOnInit(): void {
    this.exerciseForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
  }

  addExerciseFade(): void {
    this.exerciseFade.emit();
  }

  saveExercise(): void {
    if (this.exerciseForm.valid) {
      this.exercise.emit(this.exerciseForm.value);
      this.addExerciseFade();
      this.exerciseForm.reset();
    } else {
      this.errorMessage = 'Formularz jest wypełniony nieprawidłowo!';
    }
  }
}
