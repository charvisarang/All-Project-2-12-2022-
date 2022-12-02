import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { employee } from '../employee/Model/employee.model';
import { EmployeeAdapter } from '../employee/Adapter/employee-adapter';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseurl: any;
  constructor(private http: HttpClient, private employeeadapter: EmployeeAdapter) {
    this.baseurl = " http://localhost:3000/";
  }
  // GET METHOD
  getEmployee(pagenumber: number, pagesize: number): Observable<employee[]> {
    const url = this.baseurl + 'employeedata';
    return this.http.get<employee[]>(`${url}?_page=${pagenumber}&_limit=${pagesize}`).pipe(map((item: employee[]) => {
      return item.map((item: any) => this.employeeadapter.toConcat(item));
    }))
  }

  // GET METHOD
  getEmpl(): Observable<employee[]> {
    const url = this.baseurl + 'employeedata';
    return this.http.get<employee[]>(url);
  }


  // POST METHOD
  addEmployee(data: employee): Observable<employee> {
    const url = this.baseurl + 'employeedata/';
    return this.http.post<employee>(url, data);
  }
  //UPDATE METHOD
  updateEmployee(id: number, data: employee): Observable<employee> {
    const url = this.baseurl + 'employeedata/' + id;
    return this.http.put<employee>(url, data);
  }
  // DELETE METHOD
  deleteEmployee(id: number): Observable<employee> {
    const url = this.baseurl + 'employeedata/' + id;
    return this.http.delete<employee>(url);
  }

  // GET DATA BY ID
  getDataById(id: number): Observable<employee> {
    const url = this.baseurl + 'employeedata/' + id;
    return this.http.get<employee>(url);
  }

  // COUNTRY , STATE & CITY
  getCountries(): Observable<any> {
    const url = this.baseurl + 'countries';
    return this.http.get(url);
  }

  getStates(): Observable<any> {
    const url = this.baseurl + 'states';
    return this.http.get(url);
  }

  getCities(): Observable<any> {
    const url = this.baseurl + 'cities';
    return this.http.get(url);
  }
}
