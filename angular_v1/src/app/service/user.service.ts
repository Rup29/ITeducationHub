import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
public apiMsg:any;
  constructor(private http:HttpClient, private rout:Router) { }

   login(data:any){
   this.http.post("https://dev-admin.merkaaz.com/v1/user/login",data).subscribe((apiresult:any)=>{
 this.apiMsg = apiresult
//  console.log( this.apiMsg.response.data.token);
 localStorage.setItem("token",  this.apiMsg.response.data.token);
     this.rout.navigate(['/dashboard'])
   })
  }
}
