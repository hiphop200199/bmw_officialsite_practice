import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSedanComponent } from './new-sedan.component';

describe('NewSedanComponent', () => {
  let component: NewSedanComponent;
  let fixture: ComponentFixture<NewSedanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSedanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSedanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
