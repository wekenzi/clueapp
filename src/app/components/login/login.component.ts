import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder , private router:Router) { }

  alertSuccess=false;
  alertFailed=false;
  alertSignUp=false;
  registerForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(8),]],
    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if(localStorage.getItem('data') !== null){
      let data = JSON.parse(localStorage.getItem('data'));
      if(this.registerForm.get('email').value == data.email && this.registerForm.get('mobile').value == data.mobile){
        this.alertSuccess=true;
        this.alertSignUp=false;
        this.alertFailed=false;
        setTimeout(() => {
          this.router.navigate(['/products'])
        }, 3000);
      }else{
        this.alertSignUp=false;
        this.alertFailed=true;
      }
    }else{
      this.alertFailed=false;
      this.alertSignUp=true;
    }
    
    
  }

  onlyNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
  }
  

  resetForm(){
    this.registerForm.reset();
  }

}
