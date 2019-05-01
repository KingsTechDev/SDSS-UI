import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  loginFunc() {
  }

  initForm() {
    this.loginForm = this.fb.group({
      principal: this.fb.group({
        'userName': [null, Validators.required]
      }),
      credential: this.fb.group({
        'password': [null, Validators.required]
      })
    });
  }

  logInFunc() {
  }

  forgotPassword() {
  }

}
