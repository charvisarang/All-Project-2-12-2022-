import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employee: any;
  id: any;
  constructor(private employeeService: EmployeeServiceService, private router: Router, private activateroute: ActivatedRoute) {
    this.employee = [];
  }

  ngOnInit(): void {
    this.getEmployeeData();
    // this.getDataById();
  }
  getEmployeeData() {
    this.employeeService.getEmployee().subscribe((res) => {
      console.log(res);
      this.employee = res;
    });
  }
  onDelete(id: any) {
    this.employeeService.deleteEmployee(id).subscribe((res) =>
      console.log(res));
    this.getEmployeeData();
  }
  onEdit(items: any) {
    this.router.navigate(['employee/edit/' + items.id])
  }


}
