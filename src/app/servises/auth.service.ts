import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url :string="http://localhost:8080/api/users";
  constructor( private http:HttpClient) { }
  login(data:any){
    return this.http.post(this.url+"/login",data);
  }
  
}
