import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
public customers;
  constructor() {
  this.customers=[
    {id:1,email:'charvisarang@gmail.com',password:'92charvi'},
    {id:2,email:'banisarang@gmail.com',password:'14charvi'},
    {id:3,email:'sarangcharvi@gmail.com',password:'96charvi'},
    {id:4,email:'charvimachhi@gmail.com',password:'24charvi'}
  ]
   }

  ngOnInit(): void {
  }

}
