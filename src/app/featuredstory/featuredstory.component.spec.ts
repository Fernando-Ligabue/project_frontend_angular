import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedstoryComponent } from './featuredstory.component';

describe('FeaturedstoryComponent', () => {
  let component: FeaturedstoryComponent;
  let fixture: ComponentFixture<FeaturedstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedstoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
