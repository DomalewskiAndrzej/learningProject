import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDetailsContainerComponent } from './recipes-details-container.component';

describe('RecipesDetailsContainerComponent', () => {
  let component: RecipesDetailsContainerComponent;
  let fixture: ComponentFixture<RecipesDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipesDetailsContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
