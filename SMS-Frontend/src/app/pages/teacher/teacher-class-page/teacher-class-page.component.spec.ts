import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherClassPageComponent } from './teacher-class-page.component';

describe('TeacherClassPageComponent', () => {
  let component: TeacherClassPageComponent;
  let fixture: ComponentFixture<TeacherClassPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherClassPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherClassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
