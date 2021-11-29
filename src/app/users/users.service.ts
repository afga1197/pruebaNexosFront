import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    public http: HttpClient
  ) { }

  getListPost() {
    return this.http.get(`http://localhost:8080/post/listPost`);
  }

  getListUsers() {
    return this.http.get(`http://localhost:8080/user/listUser`);
  }

  postPost(body:any){
    return this.http.post(`http://localhost:8080/post/addPost`,body, {responseType: 'text'});
  }

  postUsers(body:any){
    return this.http.post(`http://localhost:8080/user/addUser`,body, {responseType: 'text'});
  }


}
