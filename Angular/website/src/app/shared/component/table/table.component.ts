import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
@Input() public students:any;
  constructor() { 
  //   this.students=[
  //     {id:1,name:'Bani',class:'8th',grade:'C'},
  //     {id:2,name:'Aashvi',class:'7th',grade:'B'},
  //     {id:3,name:'Yaashi',class:'5th',grade:'B'},
  //     {id:4,name:'Bhumi',class:'10th',grade:'A'},
  //     {id:5,name:'Gunjan',class:'9th',grade:'C'}
  //   ]
  // }
  }

  ngOnInit(): void {
  }

}
