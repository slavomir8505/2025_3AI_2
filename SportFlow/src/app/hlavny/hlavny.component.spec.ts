import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HlavnyComponent } from './hlavny.component';

describe('HlavnyComponent', () => {
  let component: HlavnyComponent;
  let fixture: ComponentFixture<HlavnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HlavnyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HlavnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
