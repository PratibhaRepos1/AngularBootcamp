import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// interface Car {
//   name:string,
//   color:string
// }
// const observable = new Observable<Car>((observer) => {
//   observer.next({
//     name:'skoda',
//     color:'gray'
//   });
// }).pipe(

// );

// observable.subscribe((value) => {
//   console.log(value);
// });

interface WikipediaResponse {
  query:{
    search:{
      title:string;
      snippet:string;
      pageid:number;
    }[];
  };
}



@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(term:string){

    return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php?', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    });
   //return 'I am wikipedia search results' + term;
  }

  /* https://en.wikipedia.org/w/api.php?
  action=query&
  format=json&
  list=search&
  utf8=1&
  srsearch=space
  */
}
