import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../servises/auth.service';
import { TokenService } from './../../servises/token.service';
import { AccountService } from './../../servises/account.service';


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

  constructor(private authService:AuthService,
     private tokenService:TokenService ,
     private accountService : AccountService,
     private router :Router
     ) { }

  ngOnInit(): void {

  }

  login(){
    this.authService.login(this.formLogin.value).subscribe(res=> {
      console.log("data login");
      console.log(res);
      this.hundleResponse(res);
     
    })
  }
  hundleResponse(res){
   
     this.tokenService.handle(res);
     // pour la redirection vers la listes des adrees 
     this.accountService.changeAuthStatus(true);
     this.router.navigateByUrl("/address");
     console.log("data current user ");
     console.log(this.tokenService.getInfo())
  }

   get email(){
     return this.formLogin.get('email');
   }
   get password(){
    return this.formLogin.get('password');
  }

}
