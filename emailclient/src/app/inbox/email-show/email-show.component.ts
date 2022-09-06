import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.route);
    this.route.params.subscribe(({ id })=> {
      //console.log(snapshot);
      
    })
  }

}
