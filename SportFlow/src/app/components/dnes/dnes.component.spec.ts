import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnesComponent } from './dnes.component';

describe('DnesComponent', () => {
  let component: DnesComponent;
  let fixture: ComponentFixture<DnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DnesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
