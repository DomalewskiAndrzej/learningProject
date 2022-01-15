import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesMenuContainerComponent } from './recipes-menu-container.component';

describe('RecipesMenuContainerComponent', () => {
  let component: RecipesMenuContainerComponent;
  let fixture: ComponentFixture<RecipesMenuContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipesMenuContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesMenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
