import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  Url="http://localhost:3000/Users"
  constructor(private http:HttpClient) { }
  usersGetData()
  {
    return this.http.get(this.Url)
  }
  SaveUserData(data:any)
  {
    debugger;
    return this.http.post(this.Url,data); 
  }
  DeleteUser(data:any)
  {
    debugger;
    return this.http.delete(this.Url,data);
  }


  // users()
  // {
  //   return[
  //     {name:'test1',email:'test1@gmail.com'},
  //     {name:'test2',email:'test2@gmail.com'}
  //   ]
  // }
  // users1()
  // {
  //   return[
  //     {name:'Demo1',email:'Demo1@gmail.com'},
  //     {name:'Demo2',email:'Demo2@gmail.com'}
  //   ]
  // }
}
