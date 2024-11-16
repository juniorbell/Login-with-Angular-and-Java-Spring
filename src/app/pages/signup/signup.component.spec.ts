import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponet } from './signup.component';

describe('SignupComponet', () => {
  let component: SignupComponet;
  let fixture: ComponentFixture<SignupComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupComponet]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
