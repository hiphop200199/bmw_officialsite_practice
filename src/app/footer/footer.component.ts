import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit{
  @ViewChildren('linkBox',{read:ElementRef<HTMLDivElement>}) linkBoxes! :QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('linkBtn',{read:ElementRef<HTMLButtonElement>}) linkBtns!:QueryList<ElementRef<HTMLButtonElement>>;
  linkBoxId:string[] = ['know-more','download','other'];
  linkBoxArray!:ElementRef<HTMLDivElement>[] ;
  linkBtnsArray!:ElementRef<HTMLButtonElement>[];
  ngAfterViewInit(): void {
   this.linkBoxArray = this.linkBoxes.toArray();
   this.linkBtnsArray = this.linkBtns.toArray();
  }   
  toggleLinkBox(id:string):void{
  let index:number = this.linkBoxArray.findIndex(b => b.nativeElement.id===id);
  let btn:ElementRef<HTMLButtonElement> = this.linkBtnsArray[index];
  let box:ElementRef<HTMLDivElement> = this.linkBoxArray[index];
  btn.nativeElement.classList.toggle('active');
  box.nativeElement.classList.toggle('active');
   this.linkBoxArray.forEach( (b,index) => {
    if(b.nativeElement.id!==id){
      this.renderer.removeClass(b.nativeElement,'active');
      this.renderer.removeClass(this.linkBtnsArray[index].nativeElement,'active');
    }
   })
  }
  constructor(private renderer: Renderer2){}
}
