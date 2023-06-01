import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  logForm!: FormGroup;
    constructor(){
     
    }
    ngOnInit(): void {
      this.logForm = new FormGroup ({
        username : new FormControl('',Validators.required),
        password : new FormControl('',Validators.required),
      });
    }

    loginForm(data:any){
          console.log(data);
          
    }
}
