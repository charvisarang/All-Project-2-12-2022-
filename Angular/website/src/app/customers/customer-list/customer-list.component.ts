import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  public customers;
  constructor() { 
    this.customers=[
      {id:1,email:'charvi@gmail.com',password:123},
      {id:2,email:'charvi@gmail.com',password:123},
      {id:3,email:'charvi@gmail.com',password:123},
      {id:4,email:'charvi@gmail.com',password:123},
      {id:5,email:'charvi@gmail.com',password:123}
    ]
  }
  

  ngOnInit(): void {
  }

}
