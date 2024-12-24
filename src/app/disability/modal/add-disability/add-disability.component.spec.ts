import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDisabilityComponent } from './add-disability.component';

describe('AddDisabilityComponent', () => {
  let component: AddDisabilityComponent;
  let fixture: ComponentFixture<AddDisabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDisabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDisabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
