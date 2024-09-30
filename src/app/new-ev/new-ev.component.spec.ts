import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEvComponent } from './new-ev.component';

describe('NewEvComponent', () => {
  let component: NewEvComponent;
  let fixture: ComponentFixture<NewEvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
