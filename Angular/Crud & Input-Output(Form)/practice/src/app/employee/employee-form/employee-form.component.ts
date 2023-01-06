import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { employeemodel } from '../employeemodel.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public mainForm: FormGroup;
  public employeeForm: any;
  public isSubmitted: boolean = false;
  public id: any;
  constructor(private Fb: FormBuilder, private employeeService: EmployeeServiceService, private router: Router, private activateroute: ActivatedRoute) {
    this.activateroute.params.subscribe((res) => {
      this.id = res['id'];
      if (this.id) {
        this.getDataById();
      }
    });

    this.employeeForm = [];
    this.mainForm = new FormGroup('');
    this.mainForm = this.Fb.group({
      name: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
      email: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(5)]]
    });
  }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.employeeService.getEmployee().subscribe((res) => {
      console.log(res);
    });
  }

  getDataById() {
    this.employeeService.getDataById(this.id).subscribe((res) => {
      console.log(res);
      this.mainForm.patchValue(res);
    })
  }
  onSubmit() {
    this.isSubmitted = true;
    if (this.mainForm.valid) {
      if (this.id) {
        this.employeeService.updateEmployee(this.id, this.mainForm.value).subscribe((res) => {
          console.log(res);
        })
      }
      else {
        this.employeeService.postEmployee(this.mainForm.value).subscribe((res) => {
          console.log(res);
        })
      }
    }
  }

  onReset() {
    this.mainForm.reset();
  }


  onUser() {
    this.router.navigate(['user/user-form']);
  }
}
