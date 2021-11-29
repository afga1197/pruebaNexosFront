import { Component, OnInit } from '@angular/core';
import { MerchandiseService } from './merchandise.service'

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.css']
})
export class MerchandiseComponent implements OnInit {

  search: any;
  listMerchandise: any;
  listUser: any;
  itempage: any = 5
  page: number;
  merchandise: any = {};
  validador = false;
  name: any
  today = new Date().toISOString().substring(0,10);
  id:any
  user:any
  

  constructor(
    private merchandiseService: MerchandiseService,
  ) { }

  ngOnInit(): void {
    this.loadUser();
    this.loadMerchandise()
  }

  loadUser() {
    this.merchandiseService.getListUsers().subscribe(data => {
      this.listUser = data
    })
  }

  loadMerchandise() {
    this.merchandiseService.getListMerchandise().subscribe(data => {
      this.listMerchandise = data
    })
  }

  createMerchandise(merchandise: any) {
    console.log(merchandise);
    merchandise.user_id = {}
    merchandise.user_id.id = merchandise.userId
    this.merchandiseService.postMerchandise(merchandise).subscribe(data => {
      alert(data);
      this.loadMerchandise();
    }, err => {
      alert(err.error);
    })
  }

  verify() {
    this.validador = false
    this.merchandise = {};
  }

  editMerchandise(merchandise:any) {
    console.log(merchandise);
    this.validador = true
    this.merchandise = merchandise
    this.merchandise.userId = merchandise.user_id.id
    console.log(this.merchandise);
  }

  updateMerchandise(merchandise:any) {
    console.log(merchandise);
    merchandise.user_id = {}
    merchandise.user_id.id = merchandise.userId
    this.merchandiseService.putMerchandise(merchandise).subscribe(data => {
      alert(data);
      this.loadMerchandise();
    }, err => {
      alert(err.error);
    })
  }

  deleteMerchandise(merchandise) {
    console.log(merchandise);

  this.id=merchandise.id
  
    
  }

  delete(user){
    this.merchandiseService.deleteMerchandise(this.id, user).subscribe(data => {
      alert(data);
      this.loadMerchandise();
    }, err => {
      alert(err.error);
    })
  }
}
