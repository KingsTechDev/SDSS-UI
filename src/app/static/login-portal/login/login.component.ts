import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logInFunc() {
  }

  forgotPassword() {
  }

}
