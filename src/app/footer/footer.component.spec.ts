import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let elCard:DebugElement;
  let elBtn:DebugElement;
  let elBox:DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    elCard = fixture.debugElement;
    elBtn = fixture.debugElement;
    elBox = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //如果該card沒active，按了以後要active，其他card要移除active
  it('if it is not active,it should launch,others shrink',()=>{
   const elCards =  elCard.queryAll(By.css('.link-card'));
   const elBtns = elBtn.queryAll(By.css('button'));
   const elBoxes =  elBox.queryAll(By.css('.link-box'));

   elCards[0].nativeElement.click();
   fixture.detectChanges();
  
    elBtns.forEach((btn,i)=>{
      if(i===0){
        expect(elBoxes[i].nativeElement.classList.contains('active')).toBeTrue();
        expect(btn.nativeElement.classList.contains('active')).toBeTrue();
      }else{
        expect(elBoxes[i].nativeElement.classList.contains('active')).toBeFalse();
        expect(btn.nativeElement.classList.contains('active')).toBeFalse();
      }
    })
  })
  //如果該card有active，按了以後要移除active
  it('if it is active,it should shrink',()=>{
    const elCards =  elCard.queryAll(By.css('.link-card'));
    const elBtns = elBtn.queryAll(By.css('button'));
    const elBoxes =  elBox.queryAll(By.css('.link-box'));
    elBoxes[0].nativeElement.classList.add('active');
    elBtns[0].nativeElement.classList.add('active');
    elCards[0].nativeElement.click();
    fixture.detectChanges();
    expect(elBoxes[0].nativeElement.classList.contains('active')).toBeFalse();
    expect(elBtns[0].nativeElement.classList.contains('active')).toBeFalse();
   
   })
})
