import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDetailsPresenterComponent } from './history-details-presenter.component';

describe('HistoryDetailsPresenterComponent', () => {
  let component: HistoryDetailsPresenterComponent;
  let fixture: ComponentFixture<HistoryDetailsPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryDetailsPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDetailsPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
