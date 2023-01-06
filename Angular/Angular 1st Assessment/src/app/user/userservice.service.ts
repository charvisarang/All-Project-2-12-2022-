import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from './usermodel.model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  public baseurl: any;

  constructor(private http: HttpClient) {
    this.baseurl = 'http://localhost:3000/';
  }

  //  Get Method
  getData(): Observable<any> {
    const url = this.baseurl + 'user';
    return this.http.get(url);
  }
  // Post Method
  postData(item: user): Observable<any> {
    const url = this.baseurl + 'user';
    return this.http.post(url, item);
  }
// Edit Method
putData(id:number,item: user):Observable<any>{
  const url = this.baseurl + 'user/' + id;
    return this.http.put(url,item);
}

  // Delete Method
  deleteData(id: number): Observable<any> {
    const url = this.baseurl + 'user/' + id;
    return this.http.delete(url);
  }
}
