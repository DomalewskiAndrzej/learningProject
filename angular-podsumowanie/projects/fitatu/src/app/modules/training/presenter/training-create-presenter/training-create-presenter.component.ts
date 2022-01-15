import { Training } from './../../../../shared/models/training.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Exercise } from 'projects/fitatu/src/app/shared/models/exercise.model';
import { Practice } from 'projects/fitatu/src/app/shared/models/practice.model';

@Component({
  selector: 'app-training-create-presenter',
  templateUrl: './training-create-presenter.component.html',
  styleUrls: ['./training-create-presenter.component.scss'],
})
export class TrainingCreatePresenterComponent implements OnInit {
  @Input() exercises: Exercise[];

  @Output() save = new EventEmitter<Training>();
  @Output() add = new EventEmitter<Exercise>();
  _exercises: Exercise[];
  practice: Practice[] = [];
  exerciseFade = false;
  createForm: FormGroup;
  errorMessage: string;
  pattern = '^0*[1-9][0-9]*(.[0-9]+)?|0+.[0-9]*[1-9][0-9]*$';

  get controlsExercises(): FormArray {
    return this.createForm.controls.exercises as FormArray;
  }

  ngOnInit(): void {
    this.initForm();
    this.addExerciseControls();
  }

  saveTraining(): void {
    if (this.createForm.valid) {
      this.controlsExercises.controls.forEach((controls: AbstractControl) => {
        this.practice.push(controls.value);
      });
      this.save.emit({
        title: this.createForm.controls.title.value,
        exercises: this.practice,
      });
      this.createForm.reset();
    } else {
      this.errorMessage = 'Formularz został wypełniony nieprawidłowo!';
    }
  }

  addExerciseControls(): void {
    this.controlsExercises.push(
      new FormGroup({
        exercise: new FormControl(null, [Validators.required]),
        series: new FormControl(null, [
          Validators.required,
          Validators.pattern(this.pattern),
        ]),
        rpe: new FormControl(null, [
          Validators.required,
          Validators.pattern(this.pattern),
        ]),
        rest: new FormControl(null, [
          Validators.required,
          Validators.pattern(this.pattern),
        ]),
      })
    );
  }

  removeExerciseControls(): void {
    if (this.controlsExercises.length > 1) {
      this.controlsExercises.removeAt(this.controlsExercises.length - 1);
    }
  }

  addExerciseFade(): void {
    this.exerciseFade = !this.exerciseFade;
  }

  addExercise(exercise: Exercise): void {
    this.add.emit(exercise);
  }

  initForm(): void {
    this.createForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      exercises: new FormArray([]),
    });
  }
}
