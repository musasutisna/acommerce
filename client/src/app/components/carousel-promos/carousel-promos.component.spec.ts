import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPromosComponent } from './carousel-promos.component';

describe('CarouselPromosComponent', () => {
  let component: CarouselPromosComponent;
  let fixture: ComponentFixture<CarouselPromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselPromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
