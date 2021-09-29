import { Component, OnInit } from '@angular/core';
import { TokenService } from './../../../servises/token.service';
import { AccountService } from './../../../servises/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser:any =null;
  constructor(private tokenService: TokenService,
    private accountService :AccountService,
    private router :Router
     ) { }

  ngOnInit(): void {
    this.accountService.authStatus.subscribe(res => {
    this.currentUser=this.tokenService.getInfo();
    console.log("data current user ");
    console.log(this.currentUser);
    })
  }
  logOut(){
    // supperimer le token
    this.tokenService.remove();
    // redirection ver login 
    this.router.navigateByUrl("/login");
      // changer etat de login
      this.accountService.changeAuthStatus(false);
  }

}
