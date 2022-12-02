import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.scss']
})
export class EmpdetailsComponent implements OnInit {

  public query: any;

  constructor(private activatedroute: ActivatedRoute) {
    
    this.activatedroute.queryParamMap.subscribe((param: any) => {this.query = param.params});
    console.log(this.query);
  }

  ngOnInit() {
  }

}
