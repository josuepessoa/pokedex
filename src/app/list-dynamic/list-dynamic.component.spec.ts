import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDynamicComponent } from './list-dynamic.component';

describe('ListDynamicComponent', () => {
  let component: ListDynamicComponent;
  let fixture: ComponentFixture<ListDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
