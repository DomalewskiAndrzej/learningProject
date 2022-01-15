import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudsRandomPresenterComponent } from './clouds-random-presenter.component';

describe('CloudsRandomPresenterComponent', () => {
  let component: CloudsRandomPresenterComponent;
  let fixture: ComponentFixture<CloudsRandomPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CloudsRandomPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudsRandomPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
