import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDetailsPresenterComponent } from './recipes-details-presenter.component';

describe('RecipesDetailsPresenterComponent', () => {
  let component: RecipesDetailsPresenterComponent;
  let fixture: ComponentFixture<RecipesDetailsPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipesDetailsPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesDetailsPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
