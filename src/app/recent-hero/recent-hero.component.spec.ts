import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentHeroComponent } from './recent-hero.component';

describe('RecentHeroComponent', () => {
  let component: RecentHeroComponent;
  let fixture: ComponentFixture<RecentHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
