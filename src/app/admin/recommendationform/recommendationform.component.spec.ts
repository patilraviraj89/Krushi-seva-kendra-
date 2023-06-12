import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationformComponent } from './recommendationform.component';

describe('RecommendationformComponent', () => {
  let component: RecommendationformComponent;
  let fixture: ComponentFixture<RecommendationformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendationformComponent]
    });
    fixture = TestBed.createComponent(RecommendationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
