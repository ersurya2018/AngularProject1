import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  // Url="http://localhost:3000/Users";
  Url="https://localhost:44373";
  constructor(private http:HttpClient) { }
  usersGetData()
  {
    var data = this.http.get(this.Url+"/api/GetAllUserData");
    return data
  }
  public getTest(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=1');//.pipe(map(res => res));
  }
  SaveUserData(data:any)
  {
    var res = this.http.post(this.Url+"/api/CreateTodoItem",data); 
    return res
  }
  DeleteUser(id:any)
  {
    return this.http.delete(this.Url+"/api/DeleteTodoItem/"+id);
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
