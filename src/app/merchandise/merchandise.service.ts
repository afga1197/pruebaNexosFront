import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MerchandiseService {

  constructor(
    public http: HttpClient
  ) { }

  getListUsers() {
    return this.http.get(`http://localhost:8080/user/listUser`);
  }

  getListMerchandise() {
    return this.http.get(`http://localhost:8080/merchandise/listMerchandise`);
  }

  postMerchandise(body:any){
    return this.http.post(`http://localhost:8080/merchandise/addMerchandise`,body, {responseType: 'text'});
  }

  putMerchandise(body:any){
    return this.http.put(`http://localhost:8080/merchandise/updateMerchandise `,body, {responseType: 'text'});
  }

  deleteMerchandise(id:any,idUser:any){
    return this.http.delete(`http://localhost:8080/merchandise/deleteMerchandise?id=`+ id + `&idUser=` + idUser , {responseType:'text'});
  }
}
