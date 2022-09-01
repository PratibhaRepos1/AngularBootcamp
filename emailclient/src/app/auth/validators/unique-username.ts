import { Injectable } from "@angular/core";

import { AbstractControl, AsyncValidator, ValidationErrors, FormControl } from "@angular/forms";
import { catchError, map } from "rxjs/operators";
import { of } from "rxjs";
import { AuthService } from "../auth.service";
@Injectable({
    providedIn:'root'
})
export class UniqueUsername implements AsyncValidator{
   // private url = 'https://api.angular-email.com/auth/username';
    constructor(private authService: AuthService) { }
   
    validate = (control:FormControl) => {
      
        const value = control.value;
        //debugger;
        return this.authService.usernameAvailable(value)
        .pipe(
            map(() => {
                return null;
          }),
          catchError( (err) => {
            //console.log(err);
            if(err.message.username){
                return of({ nonuniqueUsername: true })
            } else {
                return of({ noConnection: true })
            }
            
          })
        )

    }
}
