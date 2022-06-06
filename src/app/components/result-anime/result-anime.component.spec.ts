import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAnimeComponent } from './result-anime.component';

describe('ResultAnimeComponent', () => {
  let component: ResultAnimeComponent;
  let fixture: ComponentFixture<ResultAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
