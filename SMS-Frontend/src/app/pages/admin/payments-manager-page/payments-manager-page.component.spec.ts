import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsManagerPageComponent } from './payments-manager-page.component';

describe('PaymentsManagerPageComponent', () => {
  let component: PaymentsManagerPageComponent;
  let fixture: ComponentFixture<PaymentsManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsManagerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
