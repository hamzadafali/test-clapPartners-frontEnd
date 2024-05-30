import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuteurFormComponent } from './author-form.component';

describe('AuteurFormComponent', () => {
  let component: AuteurFormComponent;
  let fixture: ComponentFixture<AuteurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuteurFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuteurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
