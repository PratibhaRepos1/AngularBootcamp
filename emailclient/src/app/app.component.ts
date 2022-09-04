import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signedin$: BehaviorSubject<boolean>;

  //signedin: boolean = false;
  constructor(private authservice: AuthService){
    this.signedin$ = this.authservice.signedin$;
    
  }

  // ngOnInit() {
  //   this.authservice.signedin$.subscribe((signedin) => {
  //     this.signedin = signedin;
  //   });
  // }

  ngOnInit() {
    this.authservice.checkAuth().subscribe(() => {});
    // setTimeout(() => {
    //   this.authservice.signOut().subscribe(() => {});
    // }, 5000);
   
  }

}
