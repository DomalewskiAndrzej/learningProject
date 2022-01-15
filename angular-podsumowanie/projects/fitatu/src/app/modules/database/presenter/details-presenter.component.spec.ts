import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPresenterComponent } from './details-presenter.component';

describe('DetailsPresenterComponent', () => {
  let component: DetailsPresenterComponent;
  let fixture: ComponentFixture<DetailsPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
