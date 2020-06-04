import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

import { CommonService } from 'src/app/services/common.service';
import { Validator } from 'src/app/helpers/validator';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  email;
  password;

  constructor(
    private commonService:CommonService,
    private router:Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get f() { return this.loginForm.controls; }

  login(){
    // this.submitted = true;
    
    // if (this.loginForm.invalid) {
    //   return;
    // }
    
      this.commonService.getItems().subscribe(res=>{
        this.commonService.items=res;
      });
      this.router.navigate(['/itemdashboard']);
    
  }

  onReset() {
      this.submitted = false;
      this.loginForm.reset();
  }
}
