import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMyclassPageComponent } from './student-myclass-page.component';

describe('StudentMyclassPageComponent', () => {
  let component: StudentMyclassPageComponent;
  let fixture: ComponentFixture<StudentMyclassPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentMyclassPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentMyclassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
