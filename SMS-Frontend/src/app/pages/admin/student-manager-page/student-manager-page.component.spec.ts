import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentManagerPageComponent } from './student-manager-page.component';

describe('StudentManagerPageComponent', () => {
  let component: StudentManagerPageComponent;
  let fixture: ComponentFixture<StudentManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentManagerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
