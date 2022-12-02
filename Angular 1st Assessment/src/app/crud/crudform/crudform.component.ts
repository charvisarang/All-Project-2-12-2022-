import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { list } from '../crudmodel.model';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-crudform',
  templateUrl: './crudform.component.html',
  styleUrls: ['./crudform.component.scss']
})
export class CrudformComponent implements OnInit {
  public mainform: FormGroup;
  public table: list[];
  public id: any;

  constructor(private crudservice: CrudserviceService, public fb: FormBuilder) {
    this.table = [];
    this.mainform = new FormGroup('');
    this.mainform = fb.group({
      id: [''],
      name: [''],
      gender: [''],
      salary: [''],
      dob: ['']
    })
  }

  ngOnInit(): void {
    this.getcruddata();
  }

  // Get Method
  getcruddata() {
    this.crudservice.getcrud().subscribe((Response) => {
      console.log(Response);
      this.table = Response;//Table ma aava mate
    })
  }

  // Post Method()
  onSubmit() {
    console.log(this.mainform.value)
    this.crudservice.postcrud(this.mainform.value).subscribe(() => {
      //  console.log(Response)
      this.getcruddata();
    })
    this.mainform.reset();
  }

  // Delete Method
  onDelete(id: any) {
    console.log(id);
    this.crudservice.deletecrud(id).subscribe((Response) => {
      console.log(Response)
      this.getcruddata();
    })
  }
  //for edit
  getEmployeeById(id: number) {
    this.crudservice.geteditById(id).subscribe((Response) => {
      console.log(Response);
    })
  }

  onEdit(items: any) {
    this.mainform.patchValue(items);
  }
}
