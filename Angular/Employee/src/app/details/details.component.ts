import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../shared/employee-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public id?: number;
  public employee: any;
  public query: any;
  constructor(private employeeService: EmployeeServiceService, private activaterroute: ActivatedRoute) {
    this.employee = [];
    // this.activaterroute.params.subscribe((params) => {
    //   this.id = params['id'];
    //   if (this.id) {
    //     this.getID();
    //   }
    // })
    this.activaterroute.queryParamMap.subscribe((param: any) => {
      this.query = param.params
      console.log(this.query);
    });

  }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  // GET DATA 
  getEmployeeData() {
    this.employeeService.getEmpl().subscribe((result) => {
      console.log(result);
      this.employee = result;
    });
  }

  getID() {
    this.employeeService.getDataById(Number(this.id)).subscribe((result) => {
      console.log(result);
    })
  }
}
