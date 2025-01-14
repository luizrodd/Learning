import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIndexComponent } from './table-index.component';

describe('TableIndexComponent', () => {
  let component: TableIndexComponent;
  let fixture: ComponentFixture<TableIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
