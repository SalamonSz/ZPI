import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisSectionComponent } from './diagnosis-section.component';

describe('DiagnosisSectionComponent', () => {
  let component: DiagnosisSectionComponent;
  let fixture: ComponentFixture<DiagnosisSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosisSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosisSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
