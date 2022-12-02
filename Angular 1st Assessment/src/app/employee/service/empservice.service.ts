import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/usermodel';

@Injectable()
export class EmpserviceService {
  private baseurl: any;

  constructor(private http: HttpClient) {
    this.baseurl = "http://localhost:3000/"
  }
  // GET METHOD
  getData(): Observable<Employee[]> {
    const url = this.baseurl + 'empdata'
    return this.http.get<Employee[]>(url);
  }

  // POST METHOD
  addData(value:Employee):Observable<Employee>{
    const url=this.baseurl+'empdata';
    return this.http.post<Employee>(url,value)
  }

  // DELETE METHOD
deleteData(id:number):Observable<Employee>{
  const url=this.baseurl+'empdata/'+ id;
  return this.http.delete<Employee>(url);
}

// UPDATE METHOD
updateData(id:number,value:Employee):Observable<Employee>{
  const url=this.baseurl+'empdata/'+id;
  return this.http.put<Employee>(url,value);
}
}
