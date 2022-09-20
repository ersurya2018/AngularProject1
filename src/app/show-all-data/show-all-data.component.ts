import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-show-all-data',
  templateUrl: './show-all-data.component.html',
  styleUrls: ['./show-all-data.component.css']
})
export class ShowAllDataComponent implements OnInit {

  userList:any;
  constructor(private UserListApi:UserDataService,
    public router:Router) {
    this.UserListApi.usersGetData().subscribe((data)=>{
      console.log("data",data);
      this.userList=data
    })
   }
   DeleteUser(id:any){
    debugger;
    //console.warn(id)
    this.UserListApi.DeleteUser(id).subscribe((data)=>{
      this.router.navigate(['/ShowAllData']);
    });
   }

  ngOnInit(): void {
  }

}
