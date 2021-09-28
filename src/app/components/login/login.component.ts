import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    formLogin=new FormGroup ({
      email:new FormControl(null,[Validators.required, Validators.email]),
      password:new FormControl(null,[Validators.required, Validators.minLength(6)]),
    })

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.formLogin.value)
  }

   get email(){
     return this.formLogin.get('email');
   }
   get password(){
    return this.formLogin.get('password');
  }

}
