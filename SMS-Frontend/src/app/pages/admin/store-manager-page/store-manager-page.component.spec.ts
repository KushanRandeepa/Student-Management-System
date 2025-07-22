import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreManagerPageComponent } from './store-manager-page.component';

describe('StoreManagerPageComponent', () => {
  let component: StoreManagerPageComponent;
  let fixture: ComponentFixture<StoreManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreManagerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
