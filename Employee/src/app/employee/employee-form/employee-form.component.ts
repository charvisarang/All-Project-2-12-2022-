import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatarefreshService } from 'src/app/shared/datarefresh.service';
import { EmployeeServiceService } from 'src/app/shared/employee-service.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  @Output() public cancel: EventEmitter<boolean>;

  public employeeform: FormGroup;
  public isSubmitted: boolean = false;
  public users: any;
  public id: any;
  /***
   * COUNTRY,STATE & CITY
   */
  public country!: any[];
  public state!: any[];
  public city!: any[];
  public value: any;

  // Modal Popup
  displaystyle = "none";
  overlayRef: any;
  overlay: any;

  public pagenumber!: number;
  public pagesize!: number;


  constructor(private fb: FormBuilder, private employeeservice: EmployeeServiceService, private activateroute: ActivatedRoute, private datarefreshservice: DatarefreshService) {
    this.users = [];
    this.country = [];
    this.state = [];
    this.city = [];

    this.pagenumber = 10;
    this.pagesize = 2;
    this.employeeform = this.fb.group({
      id: [''],
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      fullname: [''],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      mobileno: ['', [Validators.required, Validators.minLength(16)]],
      salary: ['', Validators.required],
      selectcountry: ['', Validators.required],
      selectstate: ['', Validators.required],
      selectcity: ['', Validators.required]
    });
    this.cancel = new EventEmitter();
  }

  ngOnInit(): void {
    this.getEmployeeData();
    // COUNTRY
    this.employeeservice.getCountries().subscribe((res) => {
      this.country = res;
    });
    // By Resolver
    this.activateroute.params.subscribe((data: any) => {
      this.employeeform.patchValue(data['kuchbhi']);
    });
  }

  // GET METHOD
  getEmployeeData() {
    this.employeeservice.getEmployee(this.pagenumber, this.pagesize).subscribe((result) => {
      console.log(result);
      this.users = result;
    })
  }


  // POST METHOD
  onSave() {
    this.isSubmitted = true;
    if (this.employeeform.valid) {
      if (this.employeeform.value.id) {
        this.employeeservice.updateEmployee(this.employeeform.value.id, this.employeeform.value).subscribe((result) => {
          console.log(result);
          this.datarefreshservice.getDirectData(result);//without refreshing the page
        });
      }
      else {
        this.employeeservice.addEmployee(this.employeeform.value).subscribe((result) => {
          console.log(result);
          this.datarefreshservice.getDirectData(result);//without refreshing the page
          this.getEmployeeData();
          alert("Successfully Entered Data");
        });
        this.cancel.emit(true);//After Submitting the form, the form will be close
      }
    }
  }


  onCancel() {
    if (this.employeeform.touched) {
      this.displaystyle = "block";//Opening the Popup
    }
    else {
      this.cancel.emit(true);
    }
  }

  onYes() {
    this.displaystyle = "none";//Closing the Popup
    if (this.displaystyle) {
      this.cancel.emit(true);//Closing the form on close button
    }
  }

  onNo() {
    this.displaystyle = "none";//Closing the Popup
  }

  onSelectCountry(name: any) {
    this.value = name.target.value;
    this.employeeservice.getStates().subscribe((result) => {
      this.state = result.filter((c: any) => c.country == this.value);// c is object & c.country i.e we get particular state
      console.log(result);
    });
  }

  onSelectState(name: any) {
    this.value = name.target.value;
    this.employeeservice.getCities().subscribe((result) => {
      this.city = result.filter((s: any) => s.state == this.value);// s is object & s.state i.e we get particular city
      console.log(result);
    });
  }

}
