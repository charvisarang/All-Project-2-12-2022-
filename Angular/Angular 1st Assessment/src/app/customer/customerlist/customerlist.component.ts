import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../service/customerservice.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {
  @Input() custlist: any;
  public user: any;

  constructor(private customerservice: CustomerserviceService, private router: Router) {
    this.user = [];//get
  }

  ngOnInit(): void {
    console.log(this.custlist);
    this.getCustData();//get
  }
  // Get Method
  getCustData() {
    this.customerservice.getData().subscribe((response) => {
      console.log(response);
      this.custlist = response;//get
    })
  }

  // Delete Method
  onDelete(id: number) {
    this.customerservice.deleteData(id).subscribe((response) => {
      this.getCustData();
      // console.log(response);
    });
  }

  //Edit Method
  onEdit(data: any) {
    this.router.navigate(['customer/edit/', data.id]);
  }
}








