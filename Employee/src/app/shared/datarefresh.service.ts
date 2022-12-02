import { Injectable } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';
import { employee } from '../employee/Model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DatarefreshService {
  //public datapresent = new Subject<employee>;

  public datapresent!: Subject<employee>;
  public datapresent$!: Observable<employee>

  constructor() {
    this.datapresent = new Subject();
    this.datapresent$ = this.datapresent.asObservable();
  }

  getDirectData(data: employee) {
    this.datapresent.next(data);
  }
}
