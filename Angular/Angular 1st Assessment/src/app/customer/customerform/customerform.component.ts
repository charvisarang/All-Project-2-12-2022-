import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { customermodel } from '../customer.model';
import { CustomerserviceService } from '../service/customerservice.service';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.scss']
})
export class CustomerformComponent implements OnInit {
  public mainform: FormGroup;
  public isSubmitted: boolean = false;
  public user: any//get
  public id: any


  constructor(private fb: FormBuilder, private customerservice: CustomerserviceService, private actroute: ActivatedRoute) {
    this.actroute.params.subscribe((params) => {//params per thi id malse
      this.id = params['id'];
      if (this.id) {
        this.getDataById(this.id);
      }
    })

    this.user = [];//get
    this.mainform = new FormGroup('');
    this.mainform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]+$')]],
      gender: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]+$')]],
    })
  }

  ngOnInit(): void {
    this.getCustData();//get
  }

  //Get Method
  getCustData() {
    this.customerservice.getData().subscribe((response) => {
      console.log(response);
      this.user = response;//get
    })
  }
  //Post Method
  public onSubmit() {
    if (this.mainform.valid) {
      this.isSubmitted = true;
      this.customerservice.addData(this.mainform.value).subscribe((data: customermodel) => {
        this.user = data;
        //this.getCustData();
      });
      this.isSubmitted = false;
      this.mainform.reset();
    }
  }
  // Edit Method 
  updateDataDetails() {
    this.customerservice.updateData(this.mainform.value, this.id).subscribe((response) => {
      this.getCustData();
    })
  }

  getDataById(id: any) {
    this.customerservice.getDataById(id).subscribe((response) => {
      this.mainform.patchValue(response);
    })
  }
}

