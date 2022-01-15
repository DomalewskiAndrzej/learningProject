import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesMenuPresenterComponent } from './recipes-menu-presenter.component';

describe('RecipesMenuPresenterComponent', () => {
  let component: RecipesMenuPresenterComponent;
  let fixture: ComponentFixture<RecipesMenuPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipesMenuPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesMenuPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
