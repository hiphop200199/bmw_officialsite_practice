import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSuvComponent } from './new-suv.component';

describe('NewSuvComponent', () => {
  let component: NewSuvComponent;
  let fixture: ComponentFixture<NewSuvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSuvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
