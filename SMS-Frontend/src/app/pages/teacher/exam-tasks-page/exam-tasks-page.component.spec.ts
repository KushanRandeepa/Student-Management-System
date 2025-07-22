import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamTasksPageComponent } from './exam-tasks-page.component';

describe('ExamTasksPageComponent', () => {
  let component: ExamTasksPageComponent;
  let fixture: ComponentFixture<ExamTasksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamTasksPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamTasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
