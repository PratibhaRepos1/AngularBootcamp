import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validator, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   authForm = new FormGroup ({
    username: new FormControl(
      '',
      [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(22),
      Validators.pattern(/^[a-z0-9]+$/),
      
    ]
  
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),   
    ])
  },
  [
    this.matchPassword.validate('password', 'passwordConfirmation'),
  ],
  );

  constructor(
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  onClick(): any {
   

   this.authService.checkUsername(this.authForm.controls['username']).subscribe((data) => {
   console.log(data);
  });

  }

  onSubmit() {
    // this.authService.checkUsername(this.authForm.controls['username']).subscribe((data) => {
    //   console.log(data);
    //  });

   if(this.authForm.invalid){
    return;
   } 
   console.log(this.authForm.value);
   this.authService.signup(this.authForm.value).subscribe({
    next: response => {
      //navigate to some other route
      console.log(response);
    },
    error: (err) => {
      if(! err.status) {
        this.authForm.setErrors({noConnection: true});
      console.log(err);
      } else {
        this.authForm.setErrors({unknownError: true});
      }
    }
    
   });
  }
}
