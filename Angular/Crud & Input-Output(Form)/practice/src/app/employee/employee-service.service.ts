import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employeemodel } from './employeemodel.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  public baseUrl: any;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/";
  }

  getEmployee(): Observable<employeemodel[]> {
    const url = this.baseUrl + "data";
    return this.http.get<employeemodel[]>(url);
  }
  postEmployee(data: employeemodel): Observable<employeemodel> {
    const url = this.baseUrl + "data";
    return this.http.post<employeemodel>(url, data);
  }

  deleteEmployee(id: employeemodel): Observable<employeemodel> {
    const url = this.baseUrl + "data/" + id;
    return this.http.delete<employeemodel>(url);
  }

  updateEmployee(id: employeemodel, data: employeemodel): Observable<employeemodel> {
    const url = this.baseUrl + "data/" + id;
    return this.http.put<employeemodel>(url, data);
  }
  getDataById(id: employeemodel): Observable<employeemodel> {
    const url = this.baseUrl + "data/" + id;
    return this.http.get<employeemodel>(url);
  }
}
