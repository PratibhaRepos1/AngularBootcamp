import { AbstractControl } from "@angular/forms";

export class MathValidators {
    static addition (target: string, sourceOne: string, sourceTwo: string) {
        return (form: AbstractControl) => {
            const sum = form.value[target];
            const firstNo = parseInt(form.value[sourceOne]);
            const SecondNo = parseInt(form.value[sourceTwo]);
           
            if((firstNo + SecondNo) === parseInt(sum))
            {
                return null;
            }
            else
            {
                return {addition: true};
            }
        }
      
    }
}
