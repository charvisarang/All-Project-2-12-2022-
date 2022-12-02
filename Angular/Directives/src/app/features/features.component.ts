import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
public title='welcome to my parent page';
public mname='I am Parent';
public cname=['a','b','c','d'];
public newname="";
  
  constructor() { }

  ngOnInit(): void {
  }
  onadd(newname:string)
  {
    this.cname.push(newname);
  }














  // onaddname(){
  //   alert('you entered data');
  //   console.log('entered names');
  // }
// onadd(){
// console.log('add button');
// }
// onedit(){
//   console.log('edit button');
// }


}
