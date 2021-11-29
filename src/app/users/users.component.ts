import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  search: any;
  listPost: any = [];
  name: any;
  itempagePost: any = 5
  itempageUser: any = 5
  selected: any
  page: number;
  searchUser: any;
  pageUser: number;
  user: any = {};
  listUser: any = [];
  today = new Date().toISOString().substring(0, 10);

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.loadPost();
    this.loadUser();
  }

  loadPost() {
    this.usersService.getListPost().subscribe(data => {
      this.listPost = data
    })
  }

  loadUser() {
    this.usersService.getListUsers().subscribe(data => {
      this.listUser = data

    })
  }

  createPost(post: any) {
    let body = {
      "name": post
    }
    this.usersService.postPost(body).subscribe(
      data => {
        alert(data);
        window.location.reload();
      }, err => {
        alert(err.error);
      })
  }

  createUser(user: any) {
    let id_post = {
      "id": user.id_post
    }
    user.id_post = id_post;
    console.log(user);
    this.usersService.postUsers(user).subscribe(data => {
      alert(data);
      window.location.reload();
    }, err => {
      alert(err.error);
    })
  }
}
