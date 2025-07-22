import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRootComponent } from './teacher-root.component';

describe('TeacherRootComponent', () => {
  let component: TeacherRootComponent;
  let fixture: ComponentFixture<TeacherRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
