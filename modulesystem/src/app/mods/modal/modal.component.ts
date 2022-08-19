import { Component, OnInit, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  @HostListener("click", ["$event"])
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) { 
    //console.log(this.el.nativeElement);
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy (): void {
    //console.log('LEAVING MODAL!!!');
    this.el.nativeElement.remove();

  }
  onCloseClick() {
    this.close.emit();
  }
  
  stopClick(event:any) {
    event.stopPropagation();
  }

}
