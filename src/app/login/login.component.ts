import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userLogin(item1:any){
    alert("login");
    console.warn(item1.uname);
    console.warn(item1.upassword);
  }

}
