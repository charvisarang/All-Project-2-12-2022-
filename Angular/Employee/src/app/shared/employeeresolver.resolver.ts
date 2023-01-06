import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmployeeServiceService } from './employee-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeresolverResolver implements Resolve<boolean> {

  constructor(private employeeservice: EmployeeServiceService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.employeeservice.getDataById(route.params['id']);
  }
}
