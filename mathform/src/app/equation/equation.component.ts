import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MathValidators } from '../math-validators';
import { delay, filter, scan } from 'rxjs';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  secondsPerSolution = 0;
  mathForm = new FormGroup ({
    a: new FormControl(this.RandomNumber()),
    b: new FormControl(this.RandomNumber()),
    answer: new FormControl(''),
  },
  [
    MathValidators.addition('answer', 'a', 'b')
  ]
  );

  constructor() { }

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  ngOnInit(): void {
  
    this.mathForm.statusChanges.pipe(
      filter( value => value === 'VALID'),
      delay(200),
      scan((acc) => {
        return  {
          numberSolved: acc.numberSolved + 1,
          startTime: acc.startTime
        }
      }, { numberSolved: 0, startTime: new Date() })
    )
    .subscribe(({numberSolved, startTime}) => {
    
      this.secondsPerSolution = (
        new Date().getTime() - startTime.getTime()
      ) / numberSolved / 1000;

      //console.log(value);
        this.mathForm.setValue({
        a: this.RandomNumber(),
        b: this.RandomNumber(),
        answer: ''
      });
     
    });
  }

  RandomNumber() {
    return Math.floor(Math.random() * 10);

  }

}
