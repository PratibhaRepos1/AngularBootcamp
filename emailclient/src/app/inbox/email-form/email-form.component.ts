import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Email } from '../email';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  emailForm: FormGroup | any;
  
@Input() email: Email | undefined;

@Output() emailSubmit = new EventEmitter();

  constructor() {

   }

  ngOnInit(): void {
   // const { subject, from, to, text } = this.email;

    this.emailForm = new FormGroup({
      to: new FormControl(this.email?.to, [Validators.required, Validators.email]),
      subject: new FormControl(this.email?.subject, [Validators.required]),
      from: new FormControl({ value: this.email?.from, disabled: true }),
      text: new FormControl(this.email?.text, [Validators.required])

    });
  }

  onSubmit() {
    if(this.emailForm.invalid) {
      return;
    }
    //console.log(this.emailForm.getRawValue()); //get the from value here even if it is disabled

    this.emailSubmit.emit(this.emailForm.value);
  }

}
