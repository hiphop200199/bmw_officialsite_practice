import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveLinksComponent } from './reserve-links.component';

describe('ReserveLinksComponent', () => {
  let component: ReserveLinksComponent;
  let fixture: ComponentFixture<ReserveLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
