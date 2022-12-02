import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emplist',
  templateUrl:'./emplist.component.html',
  styleUrls: ['./emplist.component.scss']
})
export class EmplistComponent implements OnInit {
public title="Services";
public rollno=["1","2","3"];
public empdata=[{"id":1,"name":"charvi","age":26},
                  {"id":2,"name":"nirali","age":29},
                  {"id":3,"name":"manthan","age":30},
                  {"id":4,"name":"koini","age":0}]
                  
  constructor() { }

  ngOnInit(): void {
  }

}
