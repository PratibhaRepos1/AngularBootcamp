import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

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
  }

  RandomNumber() {
    return Math.floor(Math.random() * 10);

  }

}
