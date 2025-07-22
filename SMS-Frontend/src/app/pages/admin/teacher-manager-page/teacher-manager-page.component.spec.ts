import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherManagerPageComponent } from './teacher-manager-page.component';

describe('TeacherManagerPageComponent', () => {
  let component: TeacherManagerPageComponent;
  let fixture: ComponentFixture<TeacherManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherManagerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
