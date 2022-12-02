import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public students:any;
  constructor() { 
    this.students=[
      {id:1,name:'Bani',class:'8th',grade:'C'},
      {id:2,name:'Aashvi',class:'7th',grade:'B'},
      {id:3,name:'Yaashi',class:'5th',grade:'B'},
      {id:4,name:'Bhumi',class:'10th',grade:'A'},
      {id:5,name:'Gunjan',class:'9th',grade:'C'}
    ]
  }

  ngOnInit(): void {
  }

}
