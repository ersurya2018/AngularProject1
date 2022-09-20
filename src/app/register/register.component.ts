import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData:any;
  constructor(private userdataApi:UserDataService,
    public router:Router)
  {
    console.warn("userdata",userdataApi.usersGetData())
    this.userData=userdataApi.usersGetData().subscribe;
    //this.userDemo=userdata.users1();  

  }
  ngOnInit(): void {
    
  }
  //here we get the data of form by using Reactive form
  objectdata:any;
  registerForm = new FormGroup({
    First_name:new FormControl('',Validators.required),
    Last_name:new FormControl(''),
    Email:new FormControl(''),
    Password:new FormControl('')
  });
  userReg(){debugger
    console.warn(this.registerForm.value);
    this.objectdata=this.registerForm.value;
    this.userdataApi.SaveUserData(this.registerForm.value).subscribe((res)=>{
      if(res){
        this.router.navigate(['/ShowAllData']);
      } 
      console.warn(res);
    })
  }
   //here we write the code for Show error message for First Name
  get FnameValidator()
  {
    return this.registerForm.get('firstName');
  }
}
