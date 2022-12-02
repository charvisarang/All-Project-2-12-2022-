import { outputAst } from '@angular/compiler';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
import { EmpserviceService } from '../service/empservice.service';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.scss']
})
export class EmpformComponent implements OnInit {
  public loginform: FormGroup;
  public isSubmitted: boolean = false;
  FormBuilder: any;
  public id = this.route.snapshot.params['id'];//ID

  public employeeformdata: any = [];

  constructor(public formBuilder: FormBuilder, private service: EmpserviceService, private route: ActivatedRoute) {
    this.loginform = new FormGroup('');
  }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      salary: ['', Validators.required],
    });
    this.getDataDetails();
  }

  onSave() {
    if (this.loginform.valid) {
      this.isSubmitted = true;

      if (this.id) {
        this.isSubmitted = false;
        this.service.updateData(this.id, this.loginform.value).subscribe((response) => {
          this.getDataDetails();
          this.loginform.reset();
        })
      }
      else {
        this.service.addData(this.loginform.value).subscribe((response) => {
          this.getDataDetails();
        })
      }
    }
    this.isSubmitted = false;
    this.loginform.reset();
    this.getDataDetails()
  }


  onReset() {
    this.loginform.reset();
  }

  onEdit(items: any) {
    this.loginform.patchValue(items)
  }

  // GET METHOD
  getDataDetails() {
    this.service.getData().subscribe((response) => {
      console.log(response);
      this.employeeformdata = response;
    })
  }
}

