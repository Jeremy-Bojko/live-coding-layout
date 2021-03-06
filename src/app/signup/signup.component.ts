import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    this.signupForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signupForm = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      pseudo : new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit() {
    const formValues = this.signupForm?.value;
    console.log(formValues);
    this.authService.signup(formValues['email'], formValues['firstName'],formValues['lastName'],formValues['pseudo'],formValues['password'])
    .subscribe(
      (resp: any) => {
        this.router.navigate(['/login']);
      }
    )
  }

}
