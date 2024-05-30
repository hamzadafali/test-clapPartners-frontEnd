import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreFormComponent } from './book-form.component';

describe('LivreFormComponent', () => {
  let component: LivreFormComponent;
  let fixture: ComponentFixture<LivreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivreFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LivreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
