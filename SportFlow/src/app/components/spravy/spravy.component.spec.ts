import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpravyComponent } from './spravy.component';

describe('SpravyComponent', () => {
  let component: SpravyComponent;
  let fixture: ComponentFixture<SpravyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpravyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpravyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
