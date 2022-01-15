import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageMealContainerComponent } from './mainpage-meal-container.component';

describe('MainpageMealContainerComponent', () => {
  let component: MainpageMealContainerComponent;
  let fixture: ComponentFixture<MainpageMealContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainpageMealContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpageMealContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
