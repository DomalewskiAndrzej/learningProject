import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-main-presenter',
  templateUrl: './create-main-presenter.component.html',
  styleUrls: ['./create-main-presenter.component.scss'],
})
export class CreateMainPresenterComponent implements OnInit {
  @Output() back = new EventEmitter<void>();
  start = false;
  form: FormGroup;

  get controlsQuestions(): FormArray {
    return this.form.controls.questions as FormArray;
  }

  get controlsAnswers(): FormArray {
    return this.form.controls.answers as FormArray;
  }

  ngOnInit(): void {
    this.initForm();
    this.addQuestionsControls();
  }

  onBack(): void {
    this.back.emit();
  }

  addQuestionsControls(): void {
    this.controlsQuestions.push(
      new FormGroup({
        questionName: new FormControl(null, [Validators.required]),
        img: new FormControl(null, [Validators.required]),
      })
    );
  }

  addAnswer(): void {}

  initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      questions: new FormArray([]),
      answers: new FormArray([]),
    });
  }
}
