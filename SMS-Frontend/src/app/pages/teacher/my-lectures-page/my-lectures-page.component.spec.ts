import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLecturesPageComponent } from './my-lectures-page.component';

describe('MyLecturesPageComponent', () => {
  let component: MyLecturesPageComponent;
  let fixture: ComponentFixture<MyLecturesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLecturesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLecturesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
