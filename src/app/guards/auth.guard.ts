import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './../servises/token.service';
import { AccountService } from './../servises/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // les gurad pour securiser les routes frontEnd 
  constructor(private tokenService :TokenService, private accountServce :AccountService,private route :Router)
 {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean{
      if (!this.tokenService.isvalid()){
        this.tokenService.remove();
        this.accountServce.changeAuthStatus(false);
        this.route.navigateByUrl("/login");
        return false;
      }
    return true;
  }
  
}
