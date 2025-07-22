import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassPageComponent } from './admin-class-page.component';

describe('AdminClassPageComponent', () => {
  let component: AdminClassPageComponent;
  let fixture: ComponentFixture<AdminClassPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminClassPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminClassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
