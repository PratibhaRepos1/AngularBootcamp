import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items: any [] = [];
  OpenItemIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number){
    if(index === this.OpenItemIndex) {
      this.OpenItemIndex = -1;
    }
    else
    {
      this.OpenItemIndex = index;
    }
    
  }

}
