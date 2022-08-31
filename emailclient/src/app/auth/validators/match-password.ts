import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable({providedIn: 'root'})

export class MatchPassword {
     validate(password:string, passowrdConfimation:string ) {
       return (form: AbstractControl) => {
            const pwd = form.value[password];
            const pwdConfirm = form.value[passowrdConfimation];
            if(pwd === pwdConfirm){
                return null;
            }else
            {
                return {passwordsDontMatch: true };
            }
       }

    }
}
