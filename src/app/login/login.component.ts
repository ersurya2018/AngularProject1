import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData:any;
  constructor(private userdata:UserDataService) {
   }
  LoginForm=new FormGroup({
    UserName:new FormControl('',Validators.required),
    UserPassword:new FormControl(''),
  })
  LoginUser(){
    // this.LoginForm.value.UserName="",
    // this.LoginForm.value.UserPassword=""
    console.warn(this.LoginForm.value)
  }
  ngOnInit(): void {
  }

  get uservalidator()
  {
    return this.LoginForm.get('UserName');
  }
  // this is use for template driven form
  // userLogin(item1:any){
  //   alert("login");
  //   console.warn(item1.uname);
  //   console.warn(item1.upassword);
  // }

}
