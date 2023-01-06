import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { customermodel } from '../customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
baseurl:any;
  constructor(private http:HttpClient) {
    this.baseurl="http://localhost:3000/"
   }
  //  Get Method
   getData():Observable<customermodel[]>{
    const url=this.baseurl+'customer';
    return this.http.get<customermodel[]>(url);
   }
  //  Post Method
   addData(value:customermodel):Observable<customermodel>{
    const url=this.baseurl+'customer';
    return this.http.post<customermodel>(url,value);
   }
  //  Delete Method
  deleteData(id:number):Observable<customermodel>{
    const url=this.baseurl+'customer/'+id;
    return this.http.delete<customermodel>(url);
  }

// Edit Method
updateData(id:number,value:customermodel):Observable<any>{
  const url=this.baseurl+'customer/'+id;
  return this.http.put(url,value);
}

// Get Method By Id
getDataById(id:number):Observable<any>{
const url=this.baseurl+`customer/${id}`;
return this.http.get(url);
}
}
