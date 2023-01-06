import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { list } from './crudmodel.model';


@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {
  public baseurl: any;
  constructor(private http: HttpClient) {
    this.baseurl = "http://localhost:3000/";
  }
  // Get Method
getcrud():Observable<any>{
  const url=this.baseurl+ "crudlist";
  return this.http.get(url);
}
// Post Method
postcrud(data:any):Observable<any>{
  const url=this.baseurl+ "crudlist";
  return this.http.post(url,data);
}
// Delete Method
deletecrud(id:number):Observable<any>{
  const url=this.baseurl+ "crudlist/" +id;
  return this.http.delete(url);
}

//For Edit Id

geteditById(id: number): Observable<any> {
  const url:string= this.baseurl +"crudlist/" +id;
  return this.http.get(url);
}
// Edit Method
editcrud(data:list,id:number){
  const url=this.baseurl+ "crudlist/" +id;
  return this.http.put(url,data);
}
}
