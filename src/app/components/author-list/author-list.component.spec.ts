import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuteursListComponent } from './author-list.component';

describe('AuteursListComponent', () => {
  let component: AuteursListComponent;
  let fixture: ComponentFixture<AuteursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuteursListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuteursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
