import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDetailsContainerComponent } from './history-details-container.component';

describe('HistoryDetailsContainerComponent', () => {
  let component: HistoryDetailsContainerComponent;
  let fixture: ComponentFixture<HistoryDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryDetailsContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
