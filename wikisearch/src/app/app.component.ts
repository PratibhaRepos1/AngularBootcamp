import { Component, Injectable } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Injectable({ providedIn: 'root'})
export class Car {
  color = 'Black';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [];
  constructor(private car: Car, private wikipedia: WikipediaService) {

  }

  OnTerm(term:string){
    this.wikipedia.search(term).subscribe((response:any) => { 
        this.pages = response.query.search;
        
        //console.log(response);
    });
    // const results = this.wikipedia.search(term);
    // console.log(results);
    // console.log('My car color is ' + this.car.color);
  }

  
}
