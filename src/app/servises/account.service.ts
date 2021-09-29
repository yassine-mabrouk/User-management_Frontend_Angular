import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

 private loggIn=new BehaviorSubject<boolean>(this.tokenService.loggeIn());
 // changer le variable vers observable 
 authStatus =this.loggIn.asObservable();

 // changer le status de loggIn 
 changeAuthStatus (value:boolean){
   this.loggIn.next(value);
 }

  constructor(private tokenService:TokenService) { }
}
