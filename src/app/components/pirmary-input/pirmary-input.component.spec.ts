import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PirmaryInputComponent } from './pirmary-input.component';

describe('PirmaryInputComponent', () => {
  let component: PirmaryInputComponent;
  let fixture: ComponentFixture<PirmaryInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PirmaryInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PirmaryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
