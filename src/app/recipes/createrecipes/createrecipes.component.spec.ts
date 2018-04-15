import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterecipesComponent } from './createrecipes.component';

describe('CreaterecipesComponent', () => {
  let component: CreaterecipesComponent;
  let fixture: ComponentFixture<CreaterecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaterecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
