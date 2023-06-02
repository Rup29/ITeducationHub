import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  logForm!: FormGroup;
    constructor(public userServide : UserService){
     
    }
    ngOnInit(): void {
      this.logForm = new FormGroup ({
        username : new FormControl('',Validators.required),
        password : new FormControl('',Validators.required),
      });
    }

    loginForm(data:any){
          this.userServide.login(data);
          
    }
}
