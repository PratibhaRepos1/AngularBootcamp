import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  cardNumber:string | undefined | null = '';

  @Input() 
  cardname:string | undefined | null  = '';

  @Input() 
  expiration:string = '';

  constructor() { }

  ngOnInit(): void {
    console.log('come here')
  }

}
