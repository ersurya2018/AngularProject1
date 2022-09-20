import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-show-all-data',
  templateUrl: './show-all-data.component.html',
  styleUrls: ['./show-all-data.component.css']
})
export class ShowAllDataComponent implements OnInit {

  userList:any;
  constructor(private UserList:UserDataService) {
    this.UserList.usersGetData().subscribe((data)=>{
      console.log("data",data);
      this.userList=data
    })
   }

  ngOnInit(): void {
  }

}
